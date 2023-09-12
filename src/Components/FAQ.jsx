import React, { useCallback, useState } from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import './FAQ.css'
function FAQ() {




  return <>
  <div className="FAQdiv">

<div className="FAQdescription">

  <h5>FAQ</h5>
  <h2>Frequently Asked Questions</h2>
  <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>

  </div>

  <div className="AccParentDiv">

<div className="AccordingDiv">

<Accordion  >
   
      <AccordionItem header="1. What is special about comparing rental car deals?"  style={{fontSize:"17px",  color:" #706f7b",    }}>
      Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
      </AccordionItem>
   
      <AccordionItem header="2. How do I find the car rental deals?"  style={{fontSize:"17px",  color:" #706f7b",    }}>
      You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
      </AccordionItem>

      <AccordionItem header="3. Why do i use it?"  style={{fontSize:"17px",  color:" #706f7b",    }}>
        if you want car on rent use it
      </AccordionItem>
    </Accordion>
</div>
</div>

  </div>
  
  
  </>

}

export default FAQ