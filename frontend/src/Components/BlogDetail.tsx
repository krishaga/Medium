// import { useState } from "react"



export const BlogDetails = () => {
    // const [name, setName] = useState('');
    return(
        <div className="flex justify-center items-center mt-56 border-b pb-8   border-b-gray-300  "> 
            <div>
                <div className="flex items-center gap-2">
                    <div>
                        <img src="" className="w-5 h-5 rounded-full" alt="" />
                    </div>
                    <div className="text-xs flex items-center gap-1">
                        <div className="hover:cursor-pointer hover:underline">Scott-Ryan Abt</div>
                        <div className="text-gray-400">in</div>
                        <div className="hover:cursor-pointer hover:underline">The Slow Life</div> 
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="pr-10 ">
                        <div className="my-3 mb-6 pr-10">
                            <div className="text-2xl font-bold">Bye Bye, Spotify</div>
                            <div className="text-gray-600 text-sm pt-2 font-medium">And see ya later, all you subscription services in my little empire</div>
                        </div>
                        <div className="flex items-center text-gray-600 justify-between">
                            {/* details Components in the lower box left side */}
                            <div className="text-xs">
                                <div className="flex gap-5 items-center">
                                    <div className ="bz" aria-hidden="false" aria-describedby="29" aria-labelledby="29">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 64 64">
                                            <path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>August 22,2024</div>
                                    <div className="flex items-center gap-4">
                                        <div className="cf oh dx n o flex gap-1 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                <path fill="#6B6B6B" fill-rule="evenodd" d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                            <span>22K</span>
                                        </div>
                                        <div className="n flex gap-1 items-center" aria-hidden="false" aria-describedby="1192" aria-labelledby="1192">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6B6B6B" viewBox="0 0 16 16">
                                                    <path fill="#6B6B6B" d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z">
                                                    </path>
                                                </svg>
                                                <span>479</span>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            {/* the save option and other stuffs on the right */}
                            <div className="flex items-center gap-4">
                                <div>
                                    <div className="bz" aria-hidden="false" aria-describedby="4858" aria-labelledby="4858">
                                        <button className="be ap bf bg bh as bi op at au av aw ax ay az" aria-label="Show less like this">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="on oo">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="h k">
                                    <div>
                                        <div className="bz" aria-hidden="false" aria-describedby="4859" aria-labelledby="4859">
                                            <div className="bz" aria-hidden="false">
                                                <button aria-controls="addToCatalogBookmarkButton" aria-expanded="false" aria-label="Add to list bookmark button" className="be cg bf bg bh as bi op at au av fz oq or jx">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="bk">
                                                        <path fill="#000" d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="os x">
                                    <div className="bz" aria-hidden="false">
                                        <div className="bz" aria-hidden="false">
                                            <div>
                                                <div className="bz" aria-hidden="false" aria-describedby="4860" aria-labelledby="4860">
                                                    <button aria-label="More options" className="be cg bf bg bh as bi op at au av fz ot ou ov ow">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path fill="currentColor" fill-rule="evenodd" d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41" clip-rule="evenodd">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-black">
                        <img src="" alt="Hello" className="w-44 h-28" />
                    </div>
                </div>
            </div>
    </div>
)}