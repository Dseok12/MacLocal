import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        <div className='user'>
          <img src='https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 day</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} />
            </Link>
            <img src={Delete} />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, tempora qui eius error asperiores totam ipsam quis eos voluptas provident, exercitationem quos cupiditate quasi laudantium vero repudiandae assumenda libero optio!
          Recusandae necessitatibus officia nobis sed perferendis voluptatum eius, accusantium optio omnis atque earum laboriosam voluptates quia. Accusamus in mollitia sed suscipit ducimus, fugiat obcaecati rerum ullam omnis esse quia fuga!
          Neque, error praesentium iste dolorem labore maiores ea nulla fugit ducimus explicabo nobis, reiciendis inventore ullam animi officiis veritatis similique molestias repudiandae nemo cupiditate facere. Minus tempora quisquam ipsa officiis!
          Eligendi quod tempora asperiores at error beatae est modi quia architecto. Sint ut animi ea necessitatibus amet voluptas, soluta architecto libero ab. Voluptate maiores incidunt cum exercitationem molestias officiis dolorum.
          Delectus mollitia aut voluptates dolore, rerum vel illo corporis aliquid fuga, animi eligendi magnam pariatur ab asperiores enim voluptatem! Similique corrupti tempore magnam quam consectetur delectus ipsa animi hic iste.
          Illum itaque amet obcaecati nostrum illo hic dignissimos voluptatum corrupti, maxime consectetur similique neque odio totam repudiandae aliquam, error excepturi perspiciatis dolore incidunt ut natus harum, quis distinctio deleniti. Illum!
          Non soluta nemo ullam, quaerat accusamus quisquam minus natus nesciunt aliquam recusandae, rem laudantium commodi possimus amet deserunt quasi eum delectus? Fugiat qui excepturi eveniet nulla facere tempora soluta minima!
          Earum nam porro laborum sequi vel culpa perferendis, quas repellendus, expedita sint reprehenderit inventore consequatur nostrum aspernatur maxime, minus doloribus voluptas in eaque maiores esse cumque. Quasi enim saepe tempore?
          Mollitia minus illo rem nisi atque veniam alias. Natus debitis rem accusamus, numquam hic, quasi eos reprehenderit repellat voluptate, totam eaque ut! Atque eveniet explicabo laudantium facere architecto inventore reiciendis?
          Reprehenderit dolorem quia, reiciendis soluta enim totam pariatur molestiae quas perspiciatis sint temporibus. Asperiores qui optio consequatur commodi quibusdam ipsa suscipit illo fuga perferendis, debitis blanditiis voluptatem adipisci quaerat molestias!
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single