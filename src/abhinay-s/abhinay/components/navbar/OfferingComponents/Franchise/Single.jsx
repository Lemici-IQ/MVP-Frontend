import React from "react";
import { FoodFranchisePage } from "./Opp";
import Top1 from "./Top1";
import Top2 from "./Top2";
import Top3 from "./Top3";
import Top4 from "./Top4";

const Single = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6">
            <Top1 />
            <Top4 />
            <Top2 />
            <Top3 />
            <FoodFranchisePage />

            <p>
                <span className="font-bold">Disclaimer:</span> Franchise India is an integrated franchise solution company since 1999 and an absolute authority on franchiseing and
                licensing . FIHL(<span className="border-b text-[#992BFF]">www.franchiseindia.com</span> ) ad the site sponsors accept no liability for the accuracy of any information contained on this
                site or on other linked sites. We recommend you take adive from a laywer, accountant and franchise consltant experienced in
                franchising before you commit yourself. It is user’s resposibility to statisfy yourself as to the accuracy and reliability of the information
                supplied . Please read the <span className="text-[#992BFF]">terms & condition on franchise India.</span> 
            </p>
        </div>
    );
};

export default Single;
