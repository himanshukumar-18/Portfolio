import { useState, useEffect } from "react";

function useLeetCode(username) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("idle")

    useEffect(() => {
        if (!username) return;
        setStatus("loading");

        fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json()
            })
            .then((json) => {
                if (json.status == "success") {
                    setData(json)
                    setStatus("success")
                } else {
                    setStatus("error")
                }
            })
            .catch(() => setStatus("error"))
    }, [username])

    return { data, status }
}

export { useLeetCode }