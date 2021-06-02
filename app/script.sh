#/bin/bash
FLAG=$1
URL=$2

array_returning_func() {
    strArray=$(node ../app/index.js $URL)
    strArray=${strArray//,/ }
    strArray=${strArray##[}  
    strArray=${strArray%]} 
    echo "$strArray"
}
if [[ $FLAG == "--url" ]]; then
    echo "$(array_returning_func)"
else
    echo "invalid flag"
    exit 1
fi