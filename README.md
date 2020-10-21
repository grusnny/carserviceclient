# Componentes
Los componentes añadidos fueron 2, owner-edit  y owner-list  este segundo enlista todos los propietarios registrados en la base de datos además permitiendo seleccionarlos mediante un campo de chequeo para ser eliminados. Cada uno de los usuarios puede ser accedido para la modificación de sus datos y/o eliminación. owner-edit es esta nueva página que nos permite modificar la información de los usuarios.
Cada uno de estos componentes hacen uso de los servicios y de esta forma crear, modificar, eliminar o actualizar usuarios.

# Servicios
Se realizó un nuevo servicio llamado owner.service.ts en el cual se maneja la lógica, es decir en este se realizan las peticiones a la API owners, peticiones GET, DELETE, POST y PUT. Al igual que el código que ya se encontraba implementado. El único cambio a diferencia de estos anteriormente mencionados fue el end point y los parámetros de entrada en los métodos.
También se realizó un cambio importante al servicio cars.service.ts al cual se añadió un nuevo método update() el cual actualiza la información de los carros en el momento en el cual se elimina un owner. Específicamente hablando elimina los Dni de los carros cuyos clientes fueron eliminados.

