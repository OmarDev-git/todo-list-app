// Third Party
import { Button, AlertDialog, toast } from "@heroui/react";

//State Management
import { deleteTask } from "../reducers/tasksReducer";

// My Custom Hooks
import { useTasks } from "../hooks/useTasks";

export default function DeleteDialogue() {
  const { dispatch, openState } = useTasks();

  function handleDeleteTask() {
    dispatch(deleteTask());
  }

  return (
    <AlertDialog isOpen={openState.isOpen} onOpenChange={openState.setOpen}>
      <Button hidden aria-label="hidden"></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header dir="ltr">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading dir="rtl" className="font-bold">
                هل انت متاكد من الحذف ؟
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body className="overflow-hidden">
              <p>
                لايمكن التراجع عن حذف المهمة في حال <strong>تاكيد الحذف</strong>
                .
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex gap-4 ">
              <Button slot="close" variant="tertiary" className={"font-bold"}>
                الغاء
              </Button>
              <Button
                onPress={() =>
                  toast.success(
                    <p>
                      تم{" "}
                      <span className="text-red-500 underline font-bold">
                        الحذف
                      </span>{" "}
                      بنجاح
                    </p>,
                  )
                }
                onClick={handleDeleteTask}
                slot="close"
                variant="danger"
                className={"font-bold   ring-2 ring-red-300"}>
                تاكيد الحذف
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
