// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import { image as imageUpload } from "@A/upload";
// import dataURItoBlob from "@U/dataURItoBlob";
// import { LoadingSpinner } from "./LoadingSpinner";
// import "cropperjs/dist/cropper.css";

// function ImageUploadModal({
//   isOpen,
//   setIsOpen,
//   setURL,
//   title = "Resim Yükle",
//   aspectRatio = 1 / 1,
// }) {
//   if (!isOpen) return null;
//   const [image, setImage] = useState(null);
//   const [cropData, setCropData] = useState("#");
//   const [cropper, setCropper] = useState();
//   const [isLoading, setIsLoading] = useState(false);
//   const imageRef = useRef(null);

//   const onChange = (e) => {
//     e.preventDefault();
//     let files;
//     if (e.dataTransfer) {
//       files = e.dataTransfer.files;
//     } else if (e.target) {
//       files = e.target.files;
//     }
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(files[0]);
//   };

//   const getCropData = async () => {
//     try {
//       setIsLoading(true);
//       if (typeof cropper !== "undefined") {
//         const cropped = cropper.getCroppedCanvas().toDataURL();
//         console.log(cropped);
//         const blob = dataURItoBlob(cropped);
//         console.log(blob);
//         const fd = new FormData();
//         fd.append("image", blob);
//         console.log(fd);
//         const res = await imageUpload(fd);
//         await setURL(res.url);
//         setIsLoading(false);
//         setIsOpen(false);
//       }
//     } catch (e) {
//       setIsLoading(false);
//       setURL("");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className="relative z-50"
//       aria-labelledby="modal-title"
//       role="dialog"
//       aria-modal="true"
//     >
//       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//       <div className="fixed inset-0 z-10 overflow-y-auto">
//         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//           <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//             <div className="bg-white px-3 pt-5 pb-4 sm:p-6 sm:pb-4">
//               <div className="sm:flex sm:items-start">
//                 <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                   <h3
//                     className="text-lg font-medium leading-6 text-gray-900"
//                     id="modal-title"
//                   >
//                     {title}
//                   </h3>
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-500">
//                       Resmi yükledikten sonra ölçeklendirebilirsiniz.
//                     </p>
//                     <input type="file" name="" id="" onChange={onChange} />
//                     <Cropper
//                       style={{ height: 400, width: "100%" }}
//                       initialAspectRatio={aspectRatio}
//                       aspectRatio={aspectRatio}
//                       src={image}
//                       ref={imageRef}
//                       viewMode={1}
//                       guides
//                       minCropBoxHeight={10}
//                       minCropBoxWidth={10}
//                       background={false}
//                       responsive
//                       checkOrientation={false}
//                       onInitialized={(instance) => {
//                         setCropper(instance);
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//               {isLoading ? (
//                 <LoadingSpinner text="Yükleniyor" />
//               ) : (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
//                   >
//                     İptal
//                   </button>
//                   <button
//                     type="button"
//                     onClick={getCropData}
//                     className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                   >
//                     Yükle
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageUploadModal;
