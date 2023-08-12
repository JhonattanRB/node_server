## Taks List in JS

You can add task, remove task and complete task.

#### Part 2. Lista de tareas asíncrona en node

1. ¿Qué sucedio al usar async y await?

En este caso, al usar await en funciones como addTask, removeTask, y completeTask, el programa esperó a que el usuario completara la acción antes de continuar con el siguiente paso.

2. ¿Qué sucedio al usar el método then()?

Al usar el método then(), estamos agregando un callback que se ejecutará una vez que la promesa se haya resuelto...después de llamar a addTask, removeTask, o completeTask, el programa esperó a que el usuario completara la acción y, una vez hecho esto, el then() se ejecutó y llamó a mainMenu, devolviendo al usuario al menú principal.

3. ¿Qué diferencias encontraste entre async, await y el método then()?

Una de las principales diferencias es que con el uso de async/await, el código puede ser más fácil de seguir y entender y los dos se basan en promesas y no noté diferencias en rendimiento.
