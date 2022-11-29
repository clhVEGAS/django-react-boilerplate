import React, { useEffect, useState } from "react";

const InputBox = () => {
    const [input, setInput] = useState('')

    return (
        <div>
            <form>
                <label>
                Enter text:
                    <input type="text" name="textbox" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}