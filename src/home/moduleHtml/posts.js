import React, { Component } from 'react';
import commentIcon from "../../theme/images/icon/comment.svg";
import heartIcon from "../../theme/images/icon/heart.svg";

class Posts extends Component {
    render() {
        return (
            <article className="userPost">
                <header className="postHeader">
                    <div>
                        <img id="imageProfile" src="https://png2.kisspng.com/sh/d673e7abd757d538da2fb157e79b05fb/L0KzQYm3WMExN6Z5R91yc4Pzfri0gBhiephqetNsaz3wdcPqiPFvfF54feRBaXPog37qjB1xaZ9ARdd3dILogMPsjvV2eqQyh982bICweX71jCJobV46eqhtM0a3dYa5UPM3P185TaIDM0O5SIK8U8M5QGQAUKQ8M0a0PsH1h5==/kisspng-chargeback-merchant-services-company-entrepreneurs-om-lp-i-norge-5b6d364e520c67.4508336815338839823361.png" alt="ProfilePicture" />
                    </div>
                    <div>
                        <p id="userName"><b>user name</b></p>
                        <p id="userId">@user</p>
                    </div>
                    <div>
                        <p>...</p>
                    </div>
                    <div id="smallProfile">

                    </div>
                </header>
                <div className="postBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <footer className="postFooter">
                    <img src={commentIcon} alt="comment icon" />
                    <img src={heartIcon} alt="like icon" />
                </footer>
            </article>

        );
    }
}

export default Posts;
