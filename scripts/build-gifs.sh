#!/usr/bin/env bash
set -euo pipefail

FONT_BOLD="/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed-Bold.ttf"
FONT_REGULAR="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
REPO_ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
ASSET_DIR="${REPO_ROOT}/public/images"

OUTPUT_WIDTH=1280
OUTPUT_HEIGHT=720
FPS=6
DURATION=6
FRAME_COUNT=36

for dependency in ffmpeg "$FONT_BOLD" "$FONT_REGULAR"; do
  if [[ ! -e "$dependency" ]] && ! command -v "$dependency" >/dev/null 2>&1; then
    printf 'Missing required dependency: %s\n' "$dependency" >&2
    exit 1
  fi
done

render_loop() {
  local source="$1"
  local stem="$2"
  local kicker="$3"
  local line_one="$4"
  local line_two="$5"
  local phase="$6"
  local panel_y="$7"
  local kicker_y=$((panel_y + 27))
  local line_one_y=$((panel_y + 62))
  local line_two_y=$((panel_y + 124))
  local brand_y=$((panel_y + 184))
  local motion_output="${ASSET_DIR}/${stem}-motion.webp"
  local gif_output="${ASSET_DIR}/${stem}.gif"
  local poster_output="${ASSET_DIR}/${stem}-poster.webp"
  local master_filter

  master_filter="scale=${OUTPUT_WIDTH}:${OUTPUT_HEIGHT}:force_original_aspect_ratio=increase:flags=lanczos,crop=${OUTPUT_WIDTH}:${OUTPUT_HEIGHT}:(iw-${OUTPUT_WIDTH})/2:(ih-${OUTPUT_HEIGHT})/2,zoompan=z='1.045+0.014*sin(2*PI*(on+${phase})/${FRAME_COUNT})':x='iw/2-(iw/zoom/2)+18*sin(2*PI*(on+${phase})/${FRAME_COUNT})':y='ih/2-(ih/zoom/2)+12*cos(2*PI*(on+${phase})/${FRAME_COUNT})':d=1:s=${OUTPUT_WIDTH}x${OUTPUT_HEIGHT}:fps=${FPS},drawbox=x='150+6*sin(2*PI*t/${DURATION})':y=${panel_y}:w=980:h=218:color=0x050A08@0.72:t=fill,drawbox=x='150+6*sin(2*PI*t/${DURATION})':y=${panel_y}:w=7:h=218:color=0xC9FF3D@0.98:t=fill,drawtext=fontfile=${FONT_REGULAR}:text='${kicker}':fontcolor=0xC9FF3D:fontsize=20:x='190+6*sin(2*PI*t/${DURATION})':y=${kicker_y}:alpha='0.9+0.1*sin(2*PI*t/${DURATION})',drawtext=fontfile=${FONT_BOLD}:text='${line_one}':fontcolor=0xF1EEE5:fontsize=56:x='188+6*sin(2*PI*t/${DURATION})':y=${line_one_y},drawtext=fontfile=${FONT_BOLD}:text='${line_two}':fontcolor=0xF1EEE5:fontsize=56:x='188+6*sin(2*PI*t/${DURATION})':y=${line_two_y},drawtext=fontfile=${FONT_REGULAR}:text='STAXBOUND':fontcolor=0xAEB8B2:fontsize=17:x='w-tw-190-6*sin(2*PI*t/${DURATION})':y=${brand_y}:alpha='0.82+0.12*cos(2*PI*t/${DURATION})'"

  printf 'Rendering %s\n' "$stem"

  # Normalize every source to 16:9 before applying motion so wide and 3:2
  # originals retain their geometry instead of being stretched by zoompan.
  ffmpeg -y -loglevel error -stats \
    -loop 1 -framerate "$FPS" -t "$DURATION" -i "${ASSET_DIR}/${source}" \
    -vf "$master_filter" \
    -frames:v "$FRAME_COUNT" -an -loop 0 \
    -c:v libwebp_anim -lossless 0 -q:v 70 -compression_level 4 \
    "$motion_output"

  # Keep a real GIF fallback for older clients, rendered from the same
  # geometry-correct, text-safe filter so every delivery format matches.
  ffmpeg -y -loglevel error -stats \
    -loop 1 -framerate "$FPS" -t "$DURATION" -i "${ASSET_DIR}/${source}" \
    -filter_complex "[0:v]${master_filter},scale=640:360:flags=lanczos,split[frames][palette_source];[palette_source]palettegen=max_colors=80:stats_mode=diff[palette];[frames][palette]paletteuse=dither=bayer:bayer_scale=5" \
    -frames:v "$FRAME_COUNT" -loop 0 "$gif_output"

  # The motion toggle and reduced-motion preference use the same campaign
  # composition rather than reverting to an image without the baked-in copy.
  ffmpeg -y -loglevel error \
    -loop 1 -framerate "$FPS" -i "${ASSET_DIR}/${source}" -vf "$master_filter" \
    -frames:v 1 -c:v libwebp -lossless 0 -q:v 86 -compression_level 5 \
    "$poster_output"
}

# Top and bottom panels alternate to keep the seven pieces visually varied.
# All critical copy remains in the central safe area for common laptop ratios.
render_loop "staxbound-portal.webp" "staxbound-portal" "CATEGORY CREATION" "A NEW VERTICAL" "READY TO MOVE" 0 438
render_loop "staxbound-core.webp" "staxbound-core" "DIFFERENTIATED FOUNDATION" "PATENT PENDING" "BUILT FOR PARTNERS" 5 64
render_loop "staxbound-network.webp" "staxbound-network" "DISTRIBUTION AT SCALE" "ONE INTEGRATION" "A NETWORK OF DOORS" 10 438
render_loop "staxbound-vertical.webp" "staxbound-vertical" "THE UNCLAIMED AXIS" "THE NEXT CATEGORY" "RISES HERE" 15 64
render_loop "staxbound-vault.webp" "staxbound-vault" "STAXBOUND COMPANY ESTIMATE" "\$50–60B" "OPPORTUNITY UNLOCKED" 20 438
render_loop "staxbound-aggregator.webp" "staxbound-aggregator" "FOUNDING AGGREGATORS" "ONE PARTNER" "MULTIPLE PATHS" 25 64
render_loop "staxbound-growth.webp" "staxbound-growth" "TWO GROWTH LEVERS" "AUDIENCE POTENTIAL" "REVENUE POTENTIAL" 30 438
