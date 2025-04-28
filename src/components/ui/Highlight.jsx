import React from 'react';

const Highlight = ({ icon, title, para }) => {
    return (
<div class="highlight">
                <div class="highlight__img">
                 {icon}
                </div>
                <h3 class="highlight__subtitle">{title}</h3>
                <p class="highlight__para">
                 {para}
                </p>
              </div>
    )
}

export default Highlight;