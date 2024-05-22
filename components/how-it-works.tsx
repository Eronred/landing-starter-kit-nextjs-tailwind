"use client"

import React, { useState } from 'react'
import Container from './container'
import ContentWrapper from './content-wrapper'
import LeadingTitle from './leading-title'

export default function HowItWorks() {

    const spendInFeatures = [
        {
            with: "Analyze your business cost easily with group transaction thorugh tagging feature.",
            without:
                "Complex recording process due to every administrative file in a different place.",
        },
        {
            with: "Add more than one card for payment. Integrated with more than 50+ payment method.",
            without:
                "Need more effort to pay manually one by one invoice because there is no payment accommodation.",
        },
        {
            with: "Arrange your business expenses by date, name, etc.,  with just one click.",
            without:
                "Manual data arranging needs a long time because the different months/years are not in the same place.",
        },
    ]
    const [selectedTab] = useState<string>("withSpendIn")


    return (
        <div id="how-it-works" className="flex items-center w-full">
            <Container >
                <div
                    className="w-full flex flex-col items-start gap-4 ">
                    <div className="flex flex-row items-center gap-20 w-full justify-start">
                        <div className="flex flex-col items-start gap-4">
                            <LeadingTitle
                                label='INCREASE PRODUCTIVITY' />
                            <h3 className="text-4xl mt-3 leading-[48px] font-bold text-left max-w-[700px] text-text-dark">
                                Reduce Time in Doing Manual Work Managing Expenses
                            </h3>
                        </div>
                    </div>
                    <ContentWrapper
                        value={selectedTab}
                        features={spendInFeatures}
                    />
                </div>
            </Container>
        </div>
    )
}
