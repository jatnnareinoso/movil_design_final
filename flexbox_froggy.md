## Flexbox Froggy
###### Nivel #1:
Se utiliza la propiedad justify-content con el valor de flex-end para alinear la rana hacia el lado derecho del contenedor.

#pond {
  display: flex;
justify-content:flex-end;
} - 

###### Nivel #2
Se utiliza la propiedad justify-content con el valor de center para alinear las ranas hacia el centro del contenedor. 

 
#pond {
  display: flex;
justify-content: center;
}

###### Nivel #3
Se utiliza la propiedad justify-content con el valor de space-around para distribuir las ranas con espacios disponibles del contenedor iguales entre ellas, al comienzo y final.

#pond {
  display: flex;
justify-content: space-around;
}

###### Nivel #4
Se utiliza la propiedad justify-content con el valor de space-between para alinear las ranas a lo largo del contenedor con espacios iguales entre ellas.

#pond {
  display: flex;
justify-content: space-between;
}

###### Nivel #5
Se utiliza la propiedad align-items para poder alinear los elementos de manera vertical dentro del contenedor. Se utiliza la propiedad align-items con el valor de flex-end para alinear las ranas a la parte inferior del contenedor. 

#pond {
  display: flex;
align-items: flex-end;
}

###### Nivel #6
Se utilizan las propiedades justify-content y align-items, ambas con la propiedad center para alinear a la rana justo en el medio del contenedor, tanto de manera vertical como horizontal. 

#pond {
  display: flex;
justify-content: center;
align-items: center;
}

###### Nivel #7
Se utiliza las propiedades justify-content con el valor de space-round para que se distribuya el espacio libre de manera igual para las ranas, acompañado de la propiedad align-items para que se posicionen al final del contenedor de manera vertical.  

#pond {
  display: flex;
justify-content: space-around;
align-items: flex-end;
}

###### Nivel #8
Se utiliza la propiedad flex-direction para definir la dirección en que se colocan los artículos dentro del contenedor, ya sea en filas o columnas. Se utiliza la propiedad flex-direction con el valor de row-reverse, para que se posicionen en una fila horizontal, con el orden invertido al original, es decir, de derecha a izquierda. 

#pond {
  display: flex;
flex-direction: row-reverse;
}

###### Nivel #9
Se utiliza la propiedad flex-direction con el valor de columna, para que se posicionen en forma de columna, es decir de arriba hacia abajo. 

#pond {
  display: flex;
flex-direction: column;
}

###### Nivel #10
Se utiliza la propiedad justify-content con el valor de flex-end para alinear la rana hacia el lado derecho del contenedor, pero al estar acompañado de la propiedad flex-direction, con un valor de row-reverse, es decir, una fila invertida de derecha a izquierda, la posición también se invierte, por lo que queda alineado a la izquierda.  

#pond {
  display: flex;

justify-content: flex-end;
flex-direction: row-reverse
}

###### Nivel #11
Se utiliza la propiedad justify-content con el valor de end para alinear la rana hacia la parte inferior del contenedor, y con la flex-direction con valor de column, posiciona a las ranas en forma de columna, de arriba hacia abajo.

#pond {
  display: flex;
justify-content: end;
flex-direction: column;
}

###### Nivel #12
Se utiliza la propiedad justify-content con el valor de space-between para alinear las ranas a lo largo del contenedor con espacios iguales entre ellas, y con la propiedad flex-direction, con el valor column-reverse, para que se posicionen en una columna con el orden invertido al original, es decir, de arriba hacia abajo.

#pond {
  display: flex;
justify-content: space-between;
flex-direction: column-reverse;
}

###### Nivel #13
Se utiliza la propiedad justify-content con valor de center, para poder alinear las ranas en el centro del contenedor, con la propiedad align-items cuyo valor es flex-end, hacemos que se posicionen en el lado inferior, es decir al final del contenedor, y con la propiedad flex-direction, le damos el valor de row-reverse para que las ranas estén de manera horizontal de derecha a izquierda. 

#pond {
  display: flex;
justify-content: center;
flex-direction: row-reverse;
align-items: flex-end;
}

###### Nivel #14
Utilizamos la propiedad order para poder cambiar el orden de posición de un elemento determinado. Sus valores pueden ser tanto números enteros positivos como negativos. En este caso, le damos el valor de 1 para que la rana amarilla cambie de orden con la rana roja. 

#pond {
  display: flex;
}

.yellow {
order: 1
}

###### Nivel #15
Utilizamos la propiedad order para poder cambiar el orden de posición de un elemento determinado. En este caso, le damos el valor de -1 para que la rana roja que se encuentra en la posición 4, pueda llegar a la primera posición. 

#pond {
  display: flex;
}

.red {
order: -1
}

###### Nivel #16
Utilizamos otra propiedad para elementos individuales, que es align-self, que contiene los mismos valores de align-items, que sirve para posicionar los elementos dentro del contenedor de manera vertical. En este caso, le aplicamos esa propiedad a la rana amarilla con el valor flex-end, para que se posicione en la parte inferior del contenedor, es decir al final. 

#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
align-self: flex-end;
}

###### Nivel #17
Se utiliza la propiedad order para cambiar el orden de posicionamiento de las ranas amarillas, de manera que se alinean hacia la izquierda. De igual manera, se utiliza la propiedad align-self con propiedad de flex-end para que se posicione en la parte en la parte inferior del contenedor, es decir en la parte de abajo. 

#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
order: 2;
align-self: flex-end;
}

###### Nivel #18
Utilizamos la propiedad flex-wrap, que permite posicionar a los diversos elementos en una misma línea por default. Con el valor wrap, indicamos que las ranas se ajustarán en varias líneas, de arriba hacia abajo. 

#pond {
  display: flex;
flex-wrap: wrap;
}

###### Nivel #19
Utilizamos la propiedad flex-direction con el valor de column para indicar que las ranas se posicionen en forma de columna, de manera vertical, agregando la propiedad flex-wrap con valor de wrap para que se encuentren divididas en diferentes columnas. 

#pond {
  display: flex;
flex-direction: column;
flex-wrap: wrap;
}

###### Nivel #20
La propiedad flex-flow permite combinar los valores de flex-direction y flex-wrap en uno mismo. En este caso, se utiliza la propiedad flex-flow con los valores de wrap column para lograr que las ranas se puedan ajustar en diferentes columnas. 

#pond {
  display: flex;
flex-flow: wrap column; 
}

###### Nivel #21
Se utiliza la propiedad align-content para controlar el espaciado y la alineación de las líneas de elementos dentro del contenedor cuando hay espacio adicional. Contiene los mismos valores que justify-content, añadiendo el valor de stretch, que permite estirar las líneas para ajustarlas al contenedor. En este caso, contiene la propiedad flex-wrap que permite que las ranas se ajusten en diversas líneas, y con la propiedad align-content, cuyo valor es flex-start, hace que los elementos se alineen en la parte superior del contenedor. 

#pond {
  display: flex;
  flex-wrap: wrap;
align-content: flex-start;
}

###### Nivel #22
Se utiliza la propiedad flex-wrap que permite que las ranas se ajusten en diversas líneas, y con la propiedad align-content, cuyo valor es flex-end, hace que los elementos se alineen en la parte inferior del contenedor. 

#pond {
  display: flex;
  flex-wrap: wrap;
align-content: flex-end;
}

###### Nivel #23
Se utiliza la propiedad flex-wrap que permite que las ranas se ajusten en diversas líneas. La propiedad flex-direction con valor column reverse posiciona los elementos de manera vertical desde abajo hacia arriba. Y con la propiedad align-content, cuyo valor es center, hace que los elementos se alineen en el centro del contenedor.

#pond {
  display: flex;
  flex-wrap: wrap;
flex-direction: column-reverse;
align-content: center;
}

###### Nivel #24
La propiedad justify-content: center alinea los elementos en el centro del contenedor de manera horizontal. Con flex-flow: row wrap-reverse, los elementos se alinean en una fila horizontal, y si estos no caben en una sola fila, deben envolverse en una nueva fila de manera inversa. La propiedad flex-direction: column-reverse establece que las ranas deben alinearse en columnas de abajo hacia arriba. Y con align-content: space-between, se distribuye verticalmente el espacio restante entre las filas de las ranas.

#pond {
  display: flex;
justify-content: center;
flex-flow: row wrap-reverse;
flex-direction: column-reverse;
align-content: space-between;
}





