$(function()
{
    let edit = false;
    //console.log("Jquery esta funcionando");
    $('#task-result').hide();
    //funcionalidad del boton buscar Y OBTENEMOS LA INFO DEL USUARIO
    fetchTasks();//ejecutar funcion de llenado de info
    $('#search').keyup(function(e)
    {
        if($('#search').val())
        {
            let search=$('#search').val();
            //console.log(search);
            //USO DE AJAX
            //solicitud al servidor
            $.ajax(
                {
                    url:'task-search.php',  //archivo al cual se hara la solicitud del servidor
                    type: 'POST',           //recordemos que post sirve para indicar que el codigo enviara datos
                    data: {search},         //envio de la informacion
                    success: function(response) //la funcion success nos ayudara a obtener la respuesta del servidor
                    {
                        //console.log(response);
                        //obtenemos el string del servidor a json
                        let tareas=JSON.parse(response);
                        //console.log(tareas);
                        let template = '';

                        tareas.forEach(tarea => {
                            //console.log(task);
                            template += `<li> 
                                ${tarea.name}
                            </li>`
                        });

                        $('#container').html(template);
                        $('#task-result').show();
                    }
                }
            )
        }  
    })

    $('#task-form').submit(function(e)
    {
        //console.log("enviando");
        const postData = {
            name: $('#name').val(),
            description: $('#description').val(),
            id: $('#taskId').val()
        };
        //preguntar si se va a editar o ingresar un valor nuevo
        let url = edit === false ? 'task-add.php' : 'task-edit.php';
        //console.log(url);
        //$.post('task-add.php', postData)  s    
        //metodo equivalente a ajax
        $.post(url, postData,function(response)
        {
            console.log(response);
            fetchTasks();//actualizar al crear
            $('#task-form').trigger('reset');//resetea el formulario
        });
        e.preventDefault();//CANCELAR EL COMPORTAMIENTO POR DEFAULT DE UN FORMULARIO
    });

    function fetchTasks()
    {
        $.ajax(//colca el texto de la bd en forma de tabla
        {
            url: 'task-list.php',
            type: 'GET',
            success: function(response)
            {
                //console.log(response);
                let tasks=JSON.parse(response);
                let template='';
                tasks.forEach(task=>
                {
                    template += `
                    <tr taskId="${task.id}">
                        <td>${task.id}</td>
                        <td>
                            <a href="#" class="task-item">${task.name}</a>
                        </td>
                        <td>${task.description}</td>
                        <td>
                            <button class="task-delete btn btn-danger">
                                Borrar
                            </button>
                        </td>
                    </tr>
                    `
                });
                $('#tasks').html(template);
            }
        });
    }

    $(document).on('click','.task-delete',function()
    {
        //console.log('clicked');
        //console.log(this);
        if(confirm('Estas seguro de borrar el contenido?'))
        {
            let element = $(this)[0].parentElement.parentElement;
            let id=$(element).attr('taskId');
            //console.log(id);
            $.post('task-delete.php',{id},function (response)
            {
                //console.log(response);
                fetchTasks();
            });
        }
    })

    $(document).on('click','.task-item',function()
    {
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('taskId');
        $.post('task-single.php',{id}, function(response)
        {
            //console.log(response);
            const task = JSON.parse(response);
            $('#name').val(task.name);
            $('#description').val(task.description);
            $('#taskId').val(task.id);
            edit =true;
        })
    });
});