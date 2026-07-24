// Third Party
import {Button} from "@heroui/react";


export default function AddTaskButton({handleAddTask})
{


  return(
    
    <Button
          onClick={handleAddTask}
          variant="primary"
          className="text-2xl p-6 shadow-xl/20 ring-2  ring-blue-300 rounded-lg">
          اضف
        </Button>
    
  )
}
