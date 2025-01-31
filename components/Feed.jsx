"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((prompt) => (
                <PromptCard
                    key={prompt._id}
                    prompt={prompt}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    const [allPrompts, setAllPrompts] = useState([]);
    
    // Search states
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    const fetchPrompts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();

        setAllPrompts(data);
    };

    useEffect(() => {
        fetchPrompts();
    }, []);

    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        return allPrompts.filter(
            (item) =>
            regex.test(item.creator.username) ||
            regex.test(item.tag) ||
            regex.test(item.prompt)
        );
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
            const searchResult = filterPrompts(e.target.value);
            setSearchedResults(searchResult);
            }, 500)
        );
    };

    const handleTagClick = (tagName) => {
        setSearchText(tagName);

        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    };

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer' />
            </form>
            
            {/* All Prompts */}
            {searchText ? (
                searchedResults.length > 0 ? (
                    <PromptCardList
                        data={searchedResults}
                        handleTagClick={handleTagClick} />
                ) : (
                    <p className="text-cyan-300 text-xl pt-4">No search results found for
                        <span className="text-red-400 font-bold">'{searchText}'</span>
                    </p>
                )
            ) : (
                <PromptCardList data={allPrompts} handleTagClick={handleTagClick} />
            )}
            
        </section>
    );
};

export default Feed;