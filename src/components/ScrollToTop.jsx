import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        document.getElementById("section__body").scroll(0, 0);
    }, [pathname]);

    return null;
}
