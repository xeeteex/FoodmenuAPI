import React, { useRef } from 'react'

export const Home = () => {

  const sec = useRef();


  const scrollTo = () => {
    sec.current.scrollIntoView({
      behavior: 'smooth'
    });
    // document.getElementById('sec').scrollIntoView({
    //   behavior: 'smooth'
    // });
  }
  return (
    <div className='p-5 space-y-5'>
      <button onClick={scrollTo}>Sec3</button>

      <div className="sec-1">
        <h1>This is sec 1</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis id, modi nihil nemo officia quas ratione maiores tenetur delectus, reiciendis doloremque fugiat facilis alias est aliquam iste accusamus tempora! Possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda hic, corrupti inventore porro architecto autem amet quo accusantium expedita. Numquam eaque enim, quis et ipsam deserunt obcaecati aut, placeat alias officiis eius nobis! Quod aliquam et at fuga. Repellat possimus nostrum architecto molestiae quis corporis aliquam magni nisi assumenda. Magni deserunt ad dolore aperiam quam porro quis voluptas vero maiores? Molestiae accusantium culpa ipsam, excepturi impedit corrupti dolores nam autem iusto consequatur. Tempora necessitatibus officia reiciendis aperiam dolor dignissimos recusandae quo eum? Quis, quidem unde nostrum quam perferendis temporibus delectus numquam provident velit accusantium corporis veniam saepe officiis assumenda, voluptate quaerat? Non delectus iste itaque molestiae, dolore quae repudiandae exercitationem? Quas, dolor sint? Sed perferendis cupiditate, nostrum aliquid reprehenderit consectetur quisquam a recusandae accusantium officia in accusamus debitis exercitationem possimus eos eveniet adipisci suscipit harum voluptatibus aliquam excepturi tempora. Excepturi, aperiam! Magnam doloremque veniam distinctio asperiores sit nisi nulla, incidunt voluptates alias vero obcaecati quibusdam dolorem enim eveniet odit suscipit sed id harum? Deserunt, iste quia saepe vero enim perferendis dolorem rem provident ratione, fuga perspiciatis consequatur cumque consectetur adipisci quo, error ab. A culpa quibusdam laborum officiis exercitationem fugiat adipisci, deserunt dolor sunt quia placeat esse, veritatis minima expedita.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime praesentium autem excepturi, vel doloribus odio asperiores exercitationem ducimus architecto earum est quas nemo porro tenetur facere molestiae quod ea. Enim optio at odio accusantium iure. Quis tenetur laborum, nemo nobis corrupti vitae natus perspiciatis atque assumenda sunt dolore itaque, officia in vel molestiae nulla, minima fugit expedita iure? Necessitatibus et atque consequatur. Quas, rerum illo voluptas autem, earum nam placeat cumque sequi quisquam blanditiis, aliquid id delectus suscipit aperiam eaque deleniti obcaecati libero alias! Alias recusandae quo quia eius blanditiis a porro provident consectetur voluptatem, repudiandae deleniti sapiente repellat maiores quibusdam veniam corporis nesciunt quis modi quidem mollitia necessitatibus dolorem aut laudantium. Quisquam hic consectetur eius, itaque, sequi amet quibusdam optio, accusantium expedita animi recusandae eligendi sed! Vitae modi exercitationem tempore ducimus nam consequatur rerum quaerat dignissimos facilis facere dolor quas excepturi quidem qui, a aspernatur magnam corrupti praesentium blanditiis eaque accusamus tenetur at omnis eius! Ratione, hic deleniti excepturi aliquid corporis facilis culpa molestiae quam assumenda suscipit! Vitae perferendis veniam aut! Sequi ipsam, ex rerum dolor necessitatibus labore, dolores doloremque, quis deserunt qui quibusdam numquam dolorum id porro totam culpa ratione nemo! Deserunt iste doloribus magnam eum sint, quas animi aut possimus vero quibusdam, pariatur corporis odit ea? Fugit, accusamus molestiae illo impedit fuga unde obcaecati explicabo quam voluptatum alias id ratione officiis dolores at tenetur nihil itaque labore vero veniam! Reprehenderit, quo dolor placeat qui, ad blanditiis a, illo vitae quia consectetur aperiam officia nemo libero sint! Saepe quos ex unde itaque. Autem placeat iusto ut accusamus deleniti adipisci minima rem? Aspernatur odio voluptates sed a, porro, dolores ducimus at animi soluta laborum enim numquam error qui voluptatibus ut itaque, impedit iure quidem culpa voluptatum nobis pariatur! Fugiat iste quae tempore sint explicabo a hic animi assumenda?
        </p>
      </div>
      <div className="sec-2">
        <h1>This is sec 2</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis id, modi nihil nemo officia quas ratione maiores tenetur delectus, reiciendis doloremque fugiat facilis alias est aliquam iste accusamus tempora! Possimus.</p>
      </div>
      <div className="sec-3" id='sec' ref={sec}>
        <h1>This is sec 3</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis id, modi nihil nemo officia quas ratione maiores tenetur delectus, reiciendis doloremque fugiat facilis alias est aliquam iste accusamus tempora! Possimus.</p>
      </div>

    </div>
  )
}

export default Home