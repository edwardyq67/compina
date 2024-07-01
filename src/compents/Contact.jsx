import React from 'react';

function Contact() {
  return (
    <section className="mb-32">
      <div id="map" className="relative h-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container mx-auto px-2">
        <div
          className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300"
        >
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleInput90"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleInput91"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  >
                    Message
                  </label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    type="checkbox"
                    value=""
                    id="exampleCheck96"
                    defaultChecked
                  />
                  <label className="text-gray-400 inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_4px_18px_0_#f99607] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_#3b71ca,0_4px_18px_0_#3b71ca] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_#3b71ca,0_4px_18px_0_#3b71ca] bg-black text-white"
                  aria-label="Send"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 grow-0 basis-auto px-3 lg:mb-0 lg:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="headset"
                          className="w-5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M192 408c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v48zm-24-128c44.2 0 80-35.8 80-80v-80C248 53.1 194.9 0 128 0S8 53.1 8 120v80c0 44.2 35.8 80 80 80zm320 80v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24s24 10.7 24 24zm-80-32c0 13.3-10.7 24-24 24h-16v104c0 13.3-10.7 24-24 24h-72v-72h-72v72H88c-13.3 0-24-10.7-24-24V352h-16c-13.3 0-24-10.7-24-24v-80c0-110.5 89.5-200 200-200h48c110.5 0 200 89.5 200 200v80z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-mysin-400">Technical support</p>
                      <p className="text-gray-400">support@example.com</p>
                      <p className="text-gray-400">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 basis-auto px-3 lg:mb-0 lg:w-6/12">
                  <div className="flex items-start mb-6">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="dollar-sign"
                          className="w-3.5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 288 512"
                        >
                          <path
                            fill="currentColor"
                            d="M209.3 233.3l-94.3-27c-12.5-3.6-21.1-15.1-21.1-28.1 0-16.4 13.3-29.7 29.7-29.7h63.5c11.7 0 23.1 3.7 32.8 10.5 6.9 4.9 16.4 3.8 22.2-2L253.5 131c7.6-7.6 6.3-20.3-3-26.3-22.4-15-48.4-23.2-75.4-23.2H160V32c0-10.7-8.6-19.2-19.2-19.2h-25.6C104.6 12.8 96 21.4 96 32v49.7h-0.9c-53.2 0-96.6 43.3-96.6 96.6 0 42.7 28.5 80.6 69.9 92.3l94.3 27c12.5 3.6 21.1 15.1 21.1 28.1 0 16.4-13.3 29.7-29.7 29.7h-63.5c-11.7 0-23.1-3.7-32.8-10.5-6.9-4.9-16.4-3.8-22.2 2l-20.2 20.2c-7.6 7.6-6.3 20.3 3 26.3 22.4 15 48.4 23.2 75.4 23.2H128V480c0 10.7 8.6 19.2 19.2 19.2h25.6c10.6 0 19.2-8.6 19.2-19.2v-49.7h0.9c53.2 0 96.6-43.3 96.6-96.
h-96.6c0-42.7-28.5-80.6-69.9-92.3z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-mysin-400">Sales questions</p>
                      <p className="text-gray-400">sales@example.com</p>
                      <p className="text-gray-400">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div className="grow-0 basis-auto px-3 lg:w-6/12 mb-6">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="newspaper"
                          className="w-5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M552 64H128c-13.3 0-24 10.7-24 24v288H24c-13.3 0-24 10.7-24 24v88c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V88c0-13.3-10.7-24-24-24zM32 464v-64h96v64c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16zm448 0c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V96h336v368zm32-144c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v208zm-88-64H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0-96H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-mysin-400">Press</p>
                      <p className="text-gray-400">press@example.com</p>
                      <p className="text-gray-400">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div className="grow-0 basis-auto px-3 lg:w-6/12 mb-6">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bug"
                          className="w-5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M432 0c-32.8 0-59.9 24.1-63.6 55.2-6.6-1.2-13.2-2-20.4-2-24.3 0-46.6 6.6-66.5 17.9C266.1 30.3 239.7 0 208 0c-32.8 0-59.9 24.1-63.6 55.2-6.6-1.2-13.2-2-20.4-2C99.7 53.2 53.6 99.3 53.6 157.5c0 37.7 12.8 73.3 36.1 100.5-8.3 6.7-14.5 15.4-18.3 25.2H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64c0 45.5 14.4 87.7 38.7 122.5l-37.4 37.4c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l39.9-39.9c32.7 20.8 71.4 32.7 112.2 32.7h48c40.7 0 79.4-11.9 112.2-32.7l39.9 39.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-37.4-37.4c24.3-34.8 38.7-77 38.7-122.5h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-55.4c-3.8-9.8-10-18.5-18.3-25.2 23.3-27.2 36.1-62.8 36.1-100.5 0-58.2-46.1-104.3-103.2-104.3-7.2 0-13.8.8-20.4 2C371.9 24.1 344.8 0 312 0c-31.7 0-58.1 30.3-74.5 71.1-19.9-11.3-42.2-17.9-66.5-17.9-7.2 0-13.8.8-20.4 2C219.9 24.1 192.8 0 160 0zM256 384c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-mysin-400">Bug report</p>
                      <p className="text-gray-400">bugs@example.com</p>
                      <p className="text-gray-400">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
