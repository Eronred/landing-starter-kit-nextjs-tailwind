import React from 'react'
import Container from './container'
import { Button } from './button'
import LeadingTitle from './leading-title'
import { backgroundColor } from '@/lib/utils'

export default function DownloadSection() {
    return (
        <div id="download" className="flex items-center bg-background w-full overflow-hidden">
            <Container bgColor={backgroundColor}>
                <div className="w-full flex lg:flex-row flex-col items-center gap-4 ">
                    <div className="w-full lg:w-[60%] flex flex-row items-center gap-20 justify-start">
                        <div className="flex flex-col items-start gap-4">
                            <LeadingTitle label="DOWNLOAD NOW!" />
                            <h3 className="text-4xl leading-[48px] font-bold text-left max-w-[700px] text-white">
                                Start Track Your Business
                                Expenses Today
                            </h3>
                            <p className="text-text-secondary-light text-xl text-left max-w-[500px]">
                                Are you ready to make your business more organized? Download Spend.In now!
                            </p>
                            <Button
                                variant="primary"
                                size="large"
                                label='Download Now'
                            />
                        </div>
                    </div>
                    <div className="rounded-lg mt-20 overflow-hidden  mb-[-25%] lg:mr-[-10%] lg:mb-[-15%]">
                        <img src="/download.png" alt="google-play"
                            className="lg:w-full"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
