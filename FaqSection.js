import React from 'react';
import './FaqSection.scss'
import Faq from './Faq'

function FaqSection() {
 
  return (
    <div className='faq-section '>
       
        <div className='faq-section-inner '>
        <div className='font-xlm text-white family-grand-bold'>
            <span className='family-grand-heavy'>F</span>
            .<span className='family-grand'>A</span>
            .<span className='family-grand-medium'>Q</span>
        </div>
         
             <Faq
                question='What is an NFT?'
                answer='NFT stands for non-fungible token, which is a unique digital asset such as artwork, music, game token etc , where its ownership is tracked on the blockchain and cannot be replicated.'
            />
            <Faq
                question='How can I use my NFT?'
                answer='You will be able to use your C.U.B Kingdom NFT in the Metaverse and our real-life community hideout. It is also your access to unlock members-only benefits and physical goods.'
            />
            <Faq
                question='When is the official launch? How can I buy a C.U.B Kingdom NFT?'
                answer='Get ready to join the raffle on xx February 2022 (TBA) Upon launch, you can purchase directly on our website. Remember to load up on Ethereum. Join our Discord channel <TBA> to get the first dips on our launch date.'
                discord={true}
            />
            <Faq
                question='How does the raffle work?'
                answer='We want everyone to get an equal and fair chance while avoiding gas wars, thus we will utilize a raffle system.
                A computerized software will decide who can mint. Of course, early birds are rewarded with the whitelist.
                However, there is still a fair chance for all to be the lucky winners.
                Come back to our site to check out if you were the chosen one.
                '
            />
            <Faq
                question='What does “mint” mean?'
                answer='NFT Minting is the process by which your digital collectible goes through the process of validating information,
                creating a new block, and recording that information into the blockchain.
                '
            />
            <Faq
                question='What is the minting price of C.U.B Kingdom NFT?'
                answer='The price of minting will be announced soon. Join our Discord channel <TBA> to get first dips on minting price.'
                discord2={true}
            />
            <Faq
                question='What is the maximum number of C.U.B Kingdom NFTs you can mint per wallet?'
                answer='2 per wallet for Presale minting. 3 per wallet for Public minting.'
            />
            <Faq
                question='Can we mint on desktop and mobile?'
                answer='Yes! Our sites are created to be user-friendly across all devices.'
            />
            <Faq
                question='Which network does C.U.B Kingdom run on?'
                answer='We run on the Ethereum blockchain. Please utilize the smart contract on our official website for all purchases. Kindly be hyper-aware of scams and guard your cybersecurity.'
            />
            
        </div>
    </div>
  );
}

export default FaqSection;
