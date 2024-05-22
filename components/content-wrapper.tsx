
import { useState } from 'react';
import ListItem from './list-item';


interface Features {
    with: string;
    without: string;
}

interface ContentWrapperProps {
    value: string;
    features: Features[];
}


const ContentWrapper = ({ value = "withSpendIn", features }: ContentWrapperProps) => {

    const [selectedTab, setSelectedTab] = useState<string>(value)
    const selectedTabStyle: string = 'bg-primary text-white'
    const unselectedTabStyle: string = 'bg-background-light text-black'
    return (
        <div className="flex lg:flex-row flex-col justify-between w-full items-center sm:items-start mt-16">
            <div className="flex flex-col justify-between">
                <div className="flex w-fit flex-row items-center bg-text-light rounded-full cursor-pointer transition-all">
                    <button
                        onClick={() => setSelectedTab("withSpendIn")}
                        className={`flex whitespace-nowrap px-6 py-4 items-center justify-center ${selectedTab === "withSpendIn"
                            ? selectedTabStyle
                            : unselectedTabStyle
                            }  rounded-full`}
                    >
                        With Spend.In
                    </button>
                    <button
                        onClick={() => setSelectedTab("withOutSpendIn")}
                        className={`flex whitespace-nowrap px-6 py-4 items-center justify-center  ${selectedTab === "withOutSpendIn"
                            ? selectedTabStyle
                            : unselectedTabStyle
                            }  rounded-full`}>
                        Without Spend.In
                    </button>
                </div>
                <div className="flex flex-col flex-wrap justify-between w-full mt-12 gap-8">
                    <h3 className="text-2xl font-semibold text-text-dark">
                        Taking too long to tidy up administrative files makes
                        it unproductive
                    </h3>
                    <>
                        {selectedTab === "withSpendIn"
                            ? features.map((_, index) => (
                                <ListItem
                                    key={index}
                                    type="with"
                                    label={_.with}
                                />
                            ))
                            : features.map((_, index) => (
                                <ListItem
                                    key={index}
                                    type="without"
                                    label={_.without}
                                />
                            ))}
                    </>
                </div>
            </div>
            <div className="flex w-full flex-col items-center gap-8 mt-16 md:mt-4 sm:mt-16">
                {selectedTab === "withSpendIn" ? (
                    <img
                        src="/with-spendin.svg"
                        className="w-full h-full lg:w-[486px] lg:h-[434px] object-cover"
                    />

                ) : (
                    <img src="/without-spendin.svg" className="w-full h-full lg:w-[486px] lg:h-[434px]  object-cover " />
                )}
            </div>
        </div>
    );
};


export default ContentWrapper;