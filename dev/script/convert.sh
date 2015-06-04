echo 'convert start'
cd `dirname $0`
cd ../
coffee -c -o output coffee/squid.coffee
cat output/squid.js > output/squid.jsx
