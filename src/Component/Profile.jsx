import React from 'react';

const ProfilePage = () => {
    return (
        <div className='w-[100%] min-h-screen lg:flex  p-4'>
            <div className='w-[100%] lg:w-[40%] mt-4'>
                <img src="/rahmatpuraghs_staffs.jpg" alt="" className='w-[280px] h-[280px] mx-auto rounded-full' />
                <div className='text-black w-[50%] mx-auto'>
                    <h2 className='text-black text-xl text-center my-3'>বাদল চন্দ্র বর্মন</h2>
                    <h3 className='text-black text-sm text-center my-1'>প্রধান শিক্ষক</h3>
                </div>
            </div>

            <div className='w-[100%] lg:w-[60%]'>
                {/* table */}

                <table className=" w-[100%] border border-gray-300 shadow-lg  text-black">
                    <tbody>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Job Type</th>
                            <td className="px-4 py-2 border border-gray-400">নিয়মিত</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-400 text-left">MPO Status</th>
                            <td className="px-4 py-2 border border-gray-400">এমপিও</td>
                        </tr>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Index Number</th>
                            <td className="px-4 py-2 border border-gray-400">R560283</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-400 text-left">Subject</th>
                            <td className="px-4 py-2 border border-gray-400">নিয়মিত</td>
                        </tr>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Phone</th>
                            <td className="px-4 py-2 border border-gray-400">01721214499</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border border-gray-400 text-left">Email</th>
                            <td className="px-4 py-2 border border-gray-400">bcbarman99@gmail.com</td>
                        </tr>
                        <tr>
                            <th className="px-4 py-2 border border-gray-400 text-left">Social Link</th>
                            <td className="px-4 py-2 border border-gray-400"></td>
                        </tr>
                    </tbody>
                </table>



                {/* description */}
                <div className='mt-10 border-s-[6px] border-purple-600 rounded-lg py-2 leading-7 space-y-6 px-2'>
                    <p className='text-black font-light text-sm'>
                        প্রিয় শিক্ষার্থী, শিক্ষক, অভিভাবক এবং সংশ্লিষ্ট সকলের প্রতি আমার আন্তরিক শুভেচ্ছা।
                    </p>

                    <p className='text-black text-sm font-light'>
                        শিক্ষাই জাতির মেরুদণ্ড - এই চিরন্তন সত্যকে ধারণ করে রহমতপুর আদর্শ বালিকা উচ্চ বিদ্যালয় দীর্ঘকাল ধরে নারীশিক্ষার প্রসারে নিবেদিত। আমাদের বিদ্যালয় শুধু পুঁথিগত বিদ্যা বিতরণের কেন্দ্র নয়, বরং এটি এমন একটি প্রাঙ্গণ যেখানে প্রতিটি বালিকা তাদের সুপ্ত প্রতিভা বিকাশের সুযোগ পায়, মূল্যবোধে ঋদ্ধ হয় এবং ভবিষ্যতের চ্যালেঞ্জ মোকাবেলায় নিজেদের প্রস্তুত করে তোলে।
                    </p>

                    <p className='text-black text-sm font-light'>
                        আমরা বিশ্বাস করি, একটি উন্নত ও সমৃদ্ধ জাতি গঠনে নারীশিক্ষার কোনো বিকল্প নেই। তাই আমাদের লক্ষ্য হলো, এমন সুনাগরিক তৈরি করা যারা জ্ঞান, দক্ষতা, নৈতিকতা এবং মানবিক গুণাবলিতে বিকশিত হবে। আমাদের অভিজ্ঞ শিক্ষক মণ্ডলী নিরলস পরিশ্রম করে যাচ্ছেন শিক্ষার্থীদের মধ্যে শিক্ষার প্রতি আগ্রহ সৃষ্টি করতে এবং তাদের ভেতরের সম্ভাবনাকে জাগিয়ে তুলতে।
                    </p>

                    <p className='text-black text-sm font-light'>
                        শিক্ষার্থীদের জন্য একটি নিরাপদ, আনন্দময় এবং অনুপ্রেরণামূলক পরিবেশ নিশ্চিত করতে আমরা বদ্ধপরিকর। পড়াশোনার পাশাপাশি সহ-শিক্ষা কার্যক্রমেও আমরা গুরুত্বারোপ করি, যাতে শিক্ষার্থীরা শারীরিক ও মানসিক উভয় দিক থেকেই সুষম বিকাশ লাভ করতে পারে।
                    </p>

                    <p className='text-black text-sm font-light'>
                        অভিভাবকদের প্রতি আমার বিশেষ অনুরোধ, আপনারা বিদ্যালয়ের কার্যক্রমে সক্রিয়ভাবে অংশগ্রহণ করুন এবং আপনাদের মূল্যবান মতামত ও পরামর্শ দিয়ে আমাদের সহযোগিতা করুন। আপনাদের সহযোগিতা ছাড়া আমাদের লক্ষ্য অর্জন সম্ভব নয়।
                    </p>

                    <p className='text-black text-sm font-light'>
                        আসুন, আমরা সকলে মিলে রহমতপুর আদর্শ বালিকা উচ্চ বিদ্যালয়কে একটি শ্রেষ্ঠ বিদ্যাপীঠ হিসেবে গড়ে তুলি, যেখানে থেকে জ্ঞান ও আলোর মশাল হাতে নিয়ে আমাদের কন্যারা দেশ ও দশের কল্যাণে নিজেদের নিয়োজিত করবে।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;