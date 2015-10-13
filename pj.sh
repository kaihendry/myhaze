curl -s http://data.hazewatchapp.com/index_v2.json |
jq '.result[] | select(.lokasi=="Petaling Jaya")' > pj.json
