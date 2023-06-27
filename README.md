
# JSfxxk v1.0

Mi implementación de Brainf*ck, un esolang, en JavaScript.


#### Descripcion

Siempre me ha parecido interesante el lenguaje Brainf*ck, ya que fue el primer esolang que conocí. Por lo tanto, este proyecto es un intento de trasladar la lógica detrás de este lenguaje peculiar, a JavaScript.

#### Prerequisitos

##### **Node.js**
Asegúrate de tener la version LTS de Node instalada en tu ordenador, puedes descargarla [desde el sitio web oficial](https://nodejs.org/)

### **Funcionamiento**

Para poder explorar todas las características que ofrece esta versión de Brainf*ck, es necesario entender su funcionamiento.


El programa inicializa un arreglo llamado **initial** con un tamaño especificado en el parámetro **size** en donde todos sus elementos son inicializados a 0, ademas, se inicializara un puntero que siempre comenzara apuntando en el primer elemento de **initial**

Posteriormente se recorren todos los caracteres de **input** para ser evaluados, estas son las opciones:

```>``` Mueve el puntero un espacio hacia la derecha.

```<```  Mueve el puntero un espacio hacia la izquierda.

```+``` Incrementa en 1 el valor del elemento apuntado por el puntero.

```-``` Decrementa en 1 el valor del elemento apuntado por el puntero.

Una vez que se ha recorrido completamente la entrada, se imprime **initial** en pantalla, mostrando los valores resultantes después de aplicar la lógica de validación a cada uno de los caracteres.



#### **Uso**

Puedes explorar JSfxxk siguiendo estos pasos:

Clona el repositorio en tu ordenador

Abre el archivo **jsfxxk.js** y modifica la los parametros del llamado a la funcion ```jsfxxk()``` en la ultima linea con los siguientes datos:

**Size**  Un número entero que representa el tamaño del arreglo en el que deseas trabajar.

**Input** Una cadena de texto que solo contenga los caracteres mencionados anteriormente.

Guarda los cambios y sobre el directorio raiz, ejecuta el comando ```node jsfxxk.js``` para ver los resultados

**Ejemplo**

Imprimir el numero 127 ([1, 2, 7])

+(1) 

```>``` (pasamos al siguiente elemento)

++(2)

```>``` (pasamos al siguiente elemento)

+++++++(7)

en **jsfxxk.js**:

```jsfxxk(3, '+>++>+++++++')```

## Limitaciones y mejoras futuras

- Dado que esta es una versión temprana del proyecto, es posible que se produzcan errores de indexado y validación de parámetros. Sin embargo, planeo implementar estas validaciones lo antes posible. Además, una de las primeras actualizaciones incluirá soporte para los comandos  ```[]``` y ```.```
- Tambien se incluira en proximas versiones el manejo de caracteres distintos a los comandos como si fuesen comentarios de codigo

## Proximamente

#### **Soporte para ASCII**

El output real de brainf*ck no son los numeros como tal, sino sus valores en el sistema ASCII, cuando se haya implementado el soporte para los comandos mencionados mas arriba, la siguiente actualizacion incluirá la implementacion de ASCII

#### **Node.js**

En un futuro cercano, implementare las funciones que ofrece Node.js para agregar soporte al comando ```,``` y para leer archivos


## Contribuciones

El proyecto "JSfxxk" ha sido desarrollado de manera individual y no se aceptan contribuciones directas al código en este momento. Sin embargo, aprecio el interés y la disposición para colaborar.

Si tienes alguna sugerencia, pregunta o comentario relacionado con el proyecto, no dudes en ponerte en contacto conmigo a través de mi correo electrónico gaescriba.trabajo@gmail.com. Estaré encantado de recibir comentarios o responder cualquier consulta.

Gracias por tu comprensión y apoyo!


