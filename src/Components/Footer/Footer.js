import React from 'react';
import StickyFooter from 'react-sticky-footer';

const FooterHome = () => {
    return (
        <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#999999",
    padding: "2rem"
    }}
    normalStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>
    Add any footer markup here
</StickyFooter>
    )
}

export { FooterHome };