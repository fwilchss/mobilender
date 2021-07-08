# testmobilender

> PRUEBA DE PROGRAMACIÓN FRONTEND  

# Instalación  

## Revisión de ambiente  
Se requiere tener instalado node.js, para esto abrimos una consola o termina y escrivimos el siguiente comando node --version, si este regresa error es por que no se tiene instalado node, entonces procedemos a descargrlo de la siguiente ruta https://nodejs.org/es/ y daremos click el boton que dice Actual.  

Una vez instalado node procedemos a instalar los paquetes necesarios.  

 ## Instalamos el CLI de VUE   
--  npm install -g @vue/cli  

## Creamos el proyecto  
--  vue create testmobilender  

A continuacion se enlistaran las opciones que se escogieron para la instalación  
-Manually select features  
-Unit Testing  
-ESLint with error prevention only  
-Lint save  
-Jest  
-In package .json  

## Ingresamos a la carpeta que creamos en este caso sera mobilenter  
--  cd testmobilender  

## Instalamos dependencias (Esto en caso de no tenerlas, pero al instante de general el proyecto ya nos descargara las dependencias con estas configuraciones)  
--  npm install  

# Realizaremos la instalacion de las librerias y/o paquetes que ocuparemos  

## Instalamos Bootstrap  
--  npm i bootstrap-vue  

## Instalamos Json Server, en otra terminal  
--  npm install -g json-server  

## Instalamos resourse para las peticiones rest  
--  npm i vue-resource  

## Instalamos  para el manejo de rutas  
--  npm install vue-router  

## Instalamos VUEX  para el manejo de estados  
--  npm install vuex --save  

## Corremos el servidor virtual  para levantar el aplicativo  
--  npm rum serve  

# Ejecutar aplicativo de forma local  

Para correr el aplicativo de forma local debemos de tener instalado node de preferencia en su ultima versión  

## Nos aseguramos de estar en la carpeta  "testmobilender" en caso de no estar intesamos con el comendo cd  

--  cd testmobilender 

## Instalamos Json Server (en caso de no tenerlo instalado)  
--  npm install -g json-server  

## Para veririfar que lo tengamos instalado corremos el siguiente comando en una terminal  
--  json-server --version  

## Corremos el servidor virtual para levantar el aplicativo, por default nos indicara la siguiente URL : http://localhost:8080  
--  npm run dev   

## Levantamos nuestros servicios rest de forma virtual (Cada servicio se leventa en una terminal independiente)  
--  cd testmobilender/rest   o  cd /rest (si estamos dentro de testmobilender)
--  json-server --watch .\usuarios.json  --port 4000  

--  cd testmobilender/rest  o  cd /rest (si estamos dentro de testmobilender)
--  json-server --watch .\software.json  --port 4001  

--  cd testmobilender/rest  o  cd /rest (si estamos dentro de testmobilender)
--  json-server --watch .\creditos.json  --port 4002

--  cd testmobilender/rest  o  cd /rest (si estamos dentro de testmobilender)
--  json-server --watch .\colaboradores.json  --port 4003

--  cd testmobilender/rest  o  cd /rest (si estamos dentro de testmobilender)
--  json-server --watch .\controlDeCambios.json  --port 4004

Nota: es necesario levantar estos servicios para el funcionamiento del aplicativo ya que las tablas se llenar con la informacion de estos archivos, los cuales estan alojados en la carpeta ./rest  

## Para ejecutar las pruebas unitarias ejecutamos el siguiente comando  
--  npm run test:unit  