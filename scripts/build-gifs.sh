#!/usr/bin/env bash
set -euo pipefail

FONT_BOLD="/usr/share/fonts/truetype/dejavu/DejaVuSansCondensed-Bold.ttf"
FONT_REGULAR="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
ASSET_DIR="public/images"

render_loop() {
  local source="$1"
  local output="$2"
  local kicker="$3"
  local line_one="$4"
  local line_two="$5"
  local phase="$6"
  local panel_y="$7"
  local kicker_y=$((panel_y + 14))
  local line_one_y=$((panel_y + 37))
  local line_two_y=$((panel_y + 72))

  ffmpeg -y -loglevel error -stats \
    -loop 1 -framerate 8 -t 6 -i "${ASSET_DIR}/${source}" \
    -filter_complex "[0:v]zoompan=z='1.065+0.018*sin(2*PI*(on+${phase})/48)':x='iw/2-(iw/zoom/2)+9*sin(2*PI*(on+${phase})/48)':y='ih/2-(ih/zoom/2)+6*cos(2*PI*(on+${phase})/48)':d=1:s=640x360:fps=8,drawbox=x='27+5*sin(2*PI*t/6)':y=${panel_y}:w=586:h=112:color=0x050A08@0.66:t=fill,drawbox=x='27+5*sin(2*PI*t/6)':y=${panel_y}:w=4:h=112:color=0xC9FF3D@0.98:t=fill,drawtext=fontfile=${FONT_REGULAR}:text='${kicker}':fontcolor=0xC9FF3D:fontsize=10:x='45+5*sin(2*PI*t/6)':y=${kicker_y}:alpha='0.88+0.12*sin(2*PI*t/6)',drawtext=fontfile=${FONT_BOLD}:text='${line_one}':fontcolor=0xF1EEE5:fontsize=30:x='43+5*sin(2*PI*t/6)':y=${line_one_y},drawtext=fontfile=${FONT_BOLD}:text='${line_two}':fontcolor=0xF1EEE5:fontsize=30:x='43+5*sin(2*PI*t/6)':y=${line_two_y},drawtext=fontfile=${FONT_REGULAR}:text='STAXBOUND':fontcolor=0x9EAAA3:fontsize=9:x='w-tw-31-5*sin(2*PI*t/6)':y='h-20':alpha='0.78+0.12*cos(2*PI*t/6)',split[a][b];[a]palettegen=max_colors=80:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5" \
    -frames:v 48 -loop 0 "${ASSET_DIR}/${output}"
}

render_loop "staxbound-portal.webp" "staxbound-portal.gif" "CATEGORY CREATION" "A NEW VERTICAL" "READY TO MOVE" 0 220
render_loop "staxbound-core.webp" "staxbound-core.gif" "DIFFERENTIATED FOUNDATION" "PATENT PENDING" "BUILT FOR PARTNERS" 6 28
render_loop "staxbound-network.webp" "staxbound-network.gif" "DISTRIBUTION AT SCALE" "ONE INTEGRATION" "A NETWORK OF DOORS" 12 220
render_loop "staxbound-vertical.webp" "staxbound-vertical.gif" "THE UNCLAIMED AXIS" "THE NEXT CATEGORY" "RISES HERE" 18 28
render_loop "staxbound-vault.webp" "staxbound-vault.gif" "STAXBOUND COMPANY ESTIMATE" "\$50–60B" "OPPORTUNITY UNLOCKED" 24 220
render_loop "staxbound-aggregator.webp" "staxbound-aggregator.gif" "FOUNDING AGGREGATORS" "ONE PARTNER" "MULTIPLE PATHS" 30 28
render_loop "staxbound-growth.webp" "staxbound-growth.gif" "TWO GROWTH LEVERS" "AUDIENCE POTENTIAL" "REVENUE POTENTIAL" 36 220
