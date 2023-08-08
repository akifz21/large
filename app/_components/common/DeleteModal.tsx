import { deleteBlog } from "@/app/_api/blog";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

const DeleteModal = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteBlog(id);
      toast.success(res.data?.message);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <button type="button" onClick={openModal} className="custom-button">
          <FaRegTrashCan size={25} />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      The blog will be deleted, and this action cannot be
                      undone.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-row items-center gap-4">
                    <button
                      type="button"
                      className="custom-button bg-black text-white"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="custom-button"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteModal;
