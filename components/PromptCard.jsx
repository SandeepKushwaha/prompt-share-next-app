"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ prompt, handleEdit, handleDelete, handleTagClick }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();
    
    const [copied, setCopied] = useState("");
    const handleProfileClick = () => {
        console.log(prompt);
        if (prompt.creator._id === session?.user.id) return router.push("/profile");
        
        router.push(`/profile/${prompt.creator._id}?name=${prompt.creator.username}`);
    };

    // const handleCopy = () => {
    //     setCopied(prompt.prompt);
    //     navigator.clipboard.writeText(prompt.prompt);
    //     setTimeout(() => setCopied(false), 3000);
    // };

    const handleCopy = () => {
        setCopied(prompt.prompt);
        
        // Check if the clipboard API is supported
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(prompt.prompt)
                .then(() => {
                    // Successfully copied
                    setTimeout(() => setCopied(false), 3000);
                })
                .catch((error) => {
                    // If copy fails, show a toast notification
                    showToast("Failed to copy! Please try again.");
                    console.error("Copy failed:", error);
                });
        } else {
            // Clipboard API not supported, show a toast notification
            showToast("Clipboard not supported in this browser.");
        }
    };
    
    // Example of a simple toast function (you can customize it or use a library like react-toastify)
    const showToast = (message) => {
        const toast = document.createElement('div');
        toast.innerText = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        toast.style.color = '#fff';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '5px';
        toast.style.zIndex = '1000';
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    };
    
    
    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
                <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
                    onClick={handleProfileClick} >
                    
                    <Image
                        src={prompt.creator.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain' />

                    <div className='flex flex-col'>
                        {/* <h3 className='font-satoshi font-semibold text-gray-900'> */}
                        <h3 className='font-satoshi font-semibold text-white'>
                            {prompt.creator.username}
                        </h3>

                        {/* <p className='font-inter text-sm text-gray-500'> */}
                        <p className='font-inter text-sm text-gray-400'>
                            {prompt.creator.email}
                        </p>
                    </div>
                </div>

                <div className='copy_btn' onClick={handleCopy}>
                    <Image
                        src={
                            copied === prompt.prompt
                            ? "/assets/icons/tick.svg"
                            : "/assets/icons/copy.svg"
                        }
                        alt={copied === prompt.prompt ? "tick_icon" : "copy_icon"}
                        width={12}
                        height={12} />
                </div>
            </div>

            {/* <p className='my-4 font-satoshi text-sm text-gray-700'>{prompt.prompt}</p> */}
            <p className='my-4 font-satoshi text-sm text-gray-200 text-justify'>{prompt.prompt}</p>
            {/* <p className='font-inter text-sm blue_gradient cursor-pointer' */}
            <p className='font-inter text-sm text-teal-500 cursor-pointer'
                onClick={() => handleTagClick && handleTagClick(prompt.tag)} >
                #{prompt.tag}
            </p>

            { session?.user.id === prompt.creator._id && pathName === "/profile" && (
                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                    <p className='font-inter text-sm green_gradient cursor-pointer' onClick={handleEdit} >
                        Edit
                    </p>
                    <p className='font-inter text-sm orange_gradient cursor-pointer' onClick={handleDelete} >
                        Delete
                    </p>
                </div>
            )}
        </div>
    );
};

export default PromptCard;