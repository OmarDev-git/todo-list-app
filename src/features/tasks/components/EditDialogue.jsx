// React
import { useRef } from "react";

// Third Party
import { Modal, Button, Input, Label, toast } from "@heroui/react";
import { Pencil } from "@gravity-ui/icons";

//State Management
import { editTask } from "../reducers/tasksReducer";

// My Custom Hooks
import { useTasks } from "../hooks/useTasks";


export default function EditDialogue() {
  const { tasks, selectedTaskID, dispatch, openState } = useTasks();

  const selectedTask = tasks.find((task) => task.id == selectedTaskID);

  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);

  function handleEditTask() {
    const titleInput = titleInputRef.current.value;
    const bodyInput = bodyInputRef.current.value;
    // Make Sure That Task Title Is NOT Empty
    const titleValue = titleInput.trim()
      ? titleInput.trim()
      : selectedTask.title;

    const bodyValue = bodyInput.trim();

    dispatch(editTask(titleValue, bodyValue));

    // Reset Title Input Value if Input Was Empty & Removing white spaces from Title & Body Inputs
    titleInputRef.current.value = !titleInput.trim()
      ? selectedTask.title
      : titleInput.trim();

    bodyInputRef.current.value = bodyInput.trim();
  }

  return (
    <Modal isOpen={openState.isOpen} onOpenChange={openState.setOpen}>
      <Button hidden aria-label="hidden"></Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-120">
            <Modal.CloseTrigger />
            <Modal.Header dir="ltr">
              <Modal.Icon className="bg-default text-foreground w-15 h-15">
                <Pencil className="size-8" />
              </Modal.Icon>
              <Modal.Heading
                dir="rtl"
                className="text-center font-bold text-2xl">
                تعديل مهمة...{" "}
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <div className="p-4 flex flex-col gap-4">
                <Label htmlFor="taskTitle">عنوان المهمة:</Label>
                <Input
                  defaultValue={selectedTask.title}
                  ref={titleInputRef}
                  autoFocus
                  id="taskTitle"
                  className="border-2 border-gray-300 font-bold text-lg"
                  placeholder="اكتب عنوان المهمة..."
                />
                <Label htmlFor="taskDetails">تفاصيل المهمة:</Label>
                <Input
                  defaultValue={selectedTask.body}
                  ref={bodyInputRef}
                  id="taskDetails"
                  className="border-2 border-gray-300 text-lg"
                  placeholder="اكتب تفاصيل المهمة..."
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="flex justify-around items-center flex-wrap-reverse">
              <Button variant="tertiary" className="px-10 text-lg font-bold" slot="close">
                الغاء
              </Button>
              <Button
                onPress={() => toast.success("تم التعديل بنجاح")}
                onClick={handleEditTask}
                className="px-10 sm:px-25 text-lg font-bold ring-2 ring-blue-300"
                slot="close">
                تعديل
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
