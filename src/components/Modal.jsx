import React, { useState } from 'react';
import * as All from 'react-share';
import QRCODE from '../assets/qr-code.png';

const Modal = ({ open, handleCloseModal }) => {
  return (
    <>
      <div
        className={`relative z-10 ${
          !open ? 'hidden' : 'flex'
        } transition ease-in-out duration-300 delay-75`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-60 sm:max-w-lg">
              <div className="bg-rose-600  h-[700px] sm:h-[500px] overflow-x-hidden overflow-y-hidden">
                <div className="sm:flex sm:items-start ">
                  <div className="mt-3 text-center sm:mt-0 p-2 sm:text-left text-white">
                    <div className="flex gap-6 md:gap-5 justify-between items-center px-2 py-2">
                      <div
                        title="close"
                        onClick={handleCloseModal}
                        className="cursor-pointer hover:bg-slate-500 hover:rounded-lg hover:w-6 hover:h-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">
                          Share Work Card
                        </h4>
                      </div>
                      <div className="hover:cursor-not-allowed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center">
                      <img src={QRCODE} className="w-32 h-32 rounded" alt="" />
                      <p className="text-xs mt-5 text-center">
                        Point your camera to the QR Code, or visit
                        <span className="pl-1 underline">
                          <a href="https://tinga.gmt3.tech">
                            https://tinga.gmt3.tech
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="mt-10 grid grid-cols-4 gap-4 ml-4">
                      <All.FacebookShareButton url="https://tinga.gmt3.tech">
                        <All.FacebookIcon
                          size={32}
                          round={true}
                        ></All.FacebookIcon>
                      </All.FacebookShareButton>
                      <All.TwitterShareButton url="https://tinga.gmt3.tech">
                        <All.TwitterIcon
                          size={32}
                          round={true}
                        ></All.TwitterIcon>
                      </All.TwitterShareButton>
                      <All.LinkedinShareButton url="https://tinga.gmt3.tech">
                        <All.LinkedinIcon
                          size={32}
                          round={true}
                        ></All.LinkedinIcon>
                      </All.LinkedinShareButton>
                      <All.FacebookMessengerShareButton url="https://tinga.gmt3.tech">
                        <All.FacebookMessengerIcon
                          size={32}
                          round={true}
                        ></All.FacebookMessengerIcon>
                      </All.FacebookMessengerShareButton>
                      <All.EmailShareButton url="https://tinga.gmt3.tech">
                        <All.EmailIcon size={32} round={true}></All.EmailIcon>
                      </All.EmailShareButton>
                      <All.WhatsappShareButton url="https://tinga.gmt3.tech">
                        <All.WhatsappIcon
                          size={32}
                          round={true}
                        ></All.WhatsappIcon>
                      </All.WhatsappShareButton>
                      <All.TelegramShareButton url="https://tinga.gmt3.tech">
                        <All.TelegramIcon
                          size={32}
                          round={true}
                        ></All.TelegramIcon>
                      </All.TelegramShareButton>
                      <All.ViberShareButton url="https://tinga.gmt3.tech">
                        <All.ViberIcon size={32} round={true}></All.ViberIcon>
                      </All.ViberShareButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

// upload
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   strokeWidth={1.5}
//   stroke="currentColor"
//   className="w-6 h-6"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
//   />
// </svg>;

//share
{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
  />
</svg>; */
}

// qrcode
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   strokeWidth={1.5}
//   stroke="currentColor"
//   className="w-6 h-6"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
//   />
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
//   />
// </svg>;

// close
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// </svg>

// envelop
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
// </svg>

//signal
{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
  />
</svg>; */
}
