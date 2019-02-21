if [ "$1" ]; then

cd src/app/modules
ng g module $1s
cd $1s
mkdir components
mkdir pages
mkdir shared
ng g class $1s-routing.module
cd pages
ng g component $1s-listing
ng g component $1s-form
cd ..
cd shared
ng g service $1
ng g class $1.model
ng g interface $1.interface

else

  echo "Please provide a module name.."
  echo "This window will close in 3 seconds.."
  SLEEP 3

fi