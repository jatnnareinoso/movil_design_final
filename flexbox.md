# FLEXBOX
---
Flexbox, o Flexible Box Layout, es un modelo de diseño en CSS diseñado para crear diseños flexibles y eficientes en un contenedor, distribuyendo el espacio y alineando los elementos de manera predecible en diferentes tamaños de pantalla y dispositivos. Tiene como objetivo mejorar la eficiencia en el diseño, alineación y distribución del espacio en un contenedor, especialmente cuando el tamaño de los elementos es dinámico. 

Entre los conceptos principales de Flexbox están:
-	Eje principal: es el eje principal a lo largo del cual se disponen los elementos flexibles. 
-	Main Start | Main End: Los elementos flexibles se ordenan dentro del contenedor desde el inicio principal hacia el extremo principal.
-	Tamaño principal: el ancho o la altura de un elemento flexible, lo que esté en la dimensión principal, es el tamaño principal del elemento.
-	Eje transversal: Su dirección depende de la dirección del eje principal.
-	Inicio cruzado | extremo cruzado: las líneas flexibles se llenan con elementos y se ordenan en el contenedor desde el inicio cruzado hasta el extremo cruzado.
-	Tamaño cruzado: El ancho o alto de un elemento flexible en la dirección perpendicular al eje principal. 

Propiedades del Flex Container:
-	Display: Define un contenedor flexible; en línea o bloque dependiendo del valor dado. Sus valores son flex o inline-flex. 
-	Flex-Direction: Define la dirección en que se colocan los artículos flexibles en el contenedor flexible. Sus valores son: 
	- row: los elementos se distribuyen en una fila horizontal de izquierda a derecha. 
	- row-reverse: los elementos se distribuyen en una fila horizontal de derecha a izquierda.
	- column: los elementos se distribuyen en una columna vertical de arriba hacia abajo. 
	- column-reverse:  los elementos se distribuyen en una columna vertical de abajo hacia arriba.
-	Flex-wrap: Permite posicionar a los diversos elementos en una misma línea. Sus valores son:
    - nowrap (default): todos los elementos estarán en una línea.
    - wrap: los elementos se ajustarán a varias líneas, de arriba hacia abajo.
    - wrap-reverse: los elementos se ajustarán a varias líneas de abajo hacia arriba.   
-	Flex-flow: Une las propiedades flex-direction y flex-wrap en una única declaración, permitiendo establecer tanto la dirección principal en la que los elementos se distribuyen como el comportamiento de ajuste de línea en un solo valor.  ‘
-	Justify-content: Define la alineación a lo largo del eje principal, distribuyendo el espacio disponible entre los elementos o ajustar su posición a lo largo del eje principal. Sus valores son:
    - flex-start: los elementos se alinean al comienzo del contenedor. En una dirección de fila, se alinearán a la izquierda; en una dirección de columna, se alinearán en la parte superior.
    - flex-end: los elementos se alinean del contenedor. En una dirección de fila, se alinearán a la derecha; en una dirección de columna, se alinearán en la parte inferior.
    - center:  los elementos se alinean en el centro a lo largo del contenedor.
    - space-between: los elementos se distribuyen a lo largo del contenedor con espacios iguales entre ellos.
    - space-around: los elementos se distribuyen con espacios iguales entre ellos y al comienzo y final. 
    - space-evenly: los elementos se distribuyen de modo que el espacio entre dos elementos cualquiera sea igual. 
    - left: los elementos se empaquetan hacia el borde izquierdo del contenedor. 
    - right: los elementos se empaquetan hacia el borde derecho del contenedor.  
-	align-items: se utiliza para controlar la alineación de los elementos a lo largo del eje perpendicular al eje principal del contenedor flexible. Esta dirección depende de la establecida por la propiedad flex-direction. Sus valores son:
    - flex-start: los elementos se alinean al comienzo del contenedor.
    - flex-end: los elementos se alinean al final del contenedor.
    - center: se alinean al centro a lo largo del contenedor.
    - baseline: los elementos se alinean en la línea de base común, que es la línea donde se colocan las letras en un texto.
    - stretch: los elementos se estiran para llenar todo el espacio disponible a lo largo del contenedor. 
-	align-content: se utiliza para controlar el espaciado y la alineación de las líneas de elementos dentro del contenedor cuando hay espacio adicional. Sus valores son:
    - flex-start: las líneas se posicionan al comienzo del contenedor.
    - flex-end: las líneas se posicionan al final del contenedor.
    - center: las líneas se posicionan en el centro a lo largo del contenedor.
    - space-between: las líneas se distribuyen con espacios iguales entre ellas.
    - space-around: las líneas se distribuyen con espacios iguales alrededor de cada línea. 
    - space-evenly: las líneas se distribuyen con espacios iguales entre ellas y al comienzo y al final.
    - stretch: las líneas se estiran para llenar todo el espacio disponible. 

Propiedades de Flex Items:
-	order: controla el orden en que los elementos aparecen en el contenedor flexible.
-	flex-grow: define la capacidad de crecimiento de un elemento flexible si es necesario. Determina qué cantidad de espacio disponible dentro del contenedor debe ocupar el artículo.
-	flex-shrink: Define la capacidad de que un elemento flexible se encoja si es necesario. 
-	flex-basis: Define el tamaño predeterminado de un elemento antes de que se distribuya el espacio restante. 
-	align-self: permite anular la alineación predeterminada para elementos flexibles individuales. Contiene los mismos valores que align-items. 
