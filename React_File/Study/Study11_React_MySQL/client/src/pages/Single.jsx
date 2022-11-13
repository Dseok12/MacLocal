import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 687w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 774w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80 987w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80 1287w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80 1374w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80 1587w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80 1887w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80 1974w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80 2187w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80 2487w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80 2574w, https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80 2662w" alt="" />
          <div className="info">
            <span>John</span>
            <p>posts 2 day ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, molestiae delectus. Quas ex ipsam rerum facilis aut non quisquam ratione expedita assumenda. Blanditiis ullam architecto pariatur maxime nobis atque officiis.
          Distinctio quaerat est explicabo sunt consequuntur recusandae quae, neque at. Eligendi, hic placeat atque molestiae ex commodi, fuga dolores obcaecati sequi ullam libero repudiandae est at perspiciatis voluptatum reiciendis error?
          Dolorum molestiae, quasi accusamus, ex aut magni tempora maxime quibusdam dicta quis rem at iste et! Dignissimos dolore, tempore recusandae autem omnis odio eius vitae fugit, id architecto, excepturi atque.
          Praesentium nobis natus dolorem rerum, at minus repudiandae, officiis ipsam obcaecati, voluptatibus deleniti? Labore sed illo error sapiente aspernatur et, voluptatem molestias recusandae. Ex eius laborum animi eveniet sint accusantium?
          Ut qui aperiam error tempora reprehenderit praesentium sunt inventore voluptate et architecto sint quidem voluptates ipsa voluptatum officiis quis maiores temporibus voluptas molestiae, provident porro non fugiat? Pariatur, consequuntur tenetur?
          At corrupti minus, dicta in impedit voluptas culpa quaerat, soluta, vel odio pariatur? Iusto quae, nisi, nihil nam voluptate vero ducimus debitis maxime praesentium minima exercitationem qui odit modi fuga!
          Unde sapiente quaerat doloremque quis eligendi harum quisquam velit, at odit voluptate quo molestias est totam autem quibusdam cupiditate, impedit animi odio! Ipsum doloribus facere laudantium quidem debitis fugiat dicta?
          Atque, dicta laborum, minima pariatur fugiat, blanditiis delectus corrupti dolore itaque voluptate rem tenetur ipsa voluptatum. Quidem laboriosam quo quasi dolore nostrum consectetur tenetur perspiciatis impedit pariatur dolores, omnis voluptate.
          Asperiores dicta pariatur accusamus illo quo quod officia sint odio quaerat maxime, esse amet impedit architecto, doloribus porro mollitia sunt quos delectus voluptates inventore tempora debitis ullam corporis. Nihil, suscipit!
          Quam minima blanditiis eos optio illum officiis corrupti dolorem, consequuntur quas deserunt ex tenetur ratione corporis quis temporibus magnam ipsam earum sunt error nihil enim omnis similique, qui nulla. Quisquam.
          <br/>
          <br/>
          Vitae quas, perspiciatis alias animi nobis non voluptatum dicta minus, laudantium cum numquam tempore quidem ut quos officia. Incidunt totam cum doloribus! Culpa sapiente quasi molestias quia exercitationem, laboriosam hic!
          Facere sit beatae esse nesciunt repellendus est maxime officiis fugit voluptas vel magni, similique error enim commodi fugiat. Ipsum, minus! In neque nesciunt eaque soluta porro eius ea natus mollitia.
          Quae fugiat illum, numquam dignissimos voluptatibus veniam repellat natus ullam quo, iste blanditiis, quidem aliquam in? Dolores modi vitae, quae soluta quos excepturi tempore eveniet sed quidem asperiores officia? Labore?
          Quidem dolore ducimus esse error asperiores! Sint dolores pariatur, atque eveniet minus commodi, eaque ipsum, voluptatibus possimus error consequuntur! Laudantium nesciunt saepe voluptas odio eaque maiores ducimus incidunt reprehenderit tempora!
          Nihil recusandae veritatis neque dignissimos vitae aperiam eligendi blanditiis consequuntur laboriosam, odio quis? Possimus, minus aliquam ex amet perferendis dolorem autem blanditiis atque dicta, molestias ipsam nobis dolore facilis laboriosam?
          Officiis aut cumque ducimus, ipsa facere a doloribus non laborum perspiciatis dolor reiciendis debitis explicabo placeat aperiam mollitia sapiente architecto. Sunt aspernatur qui labore atque velit inventore vero ullam possimus!
          Aliquid iure voluptatibus, culpa accusamus, molestiae veritatis non, pariatur at nesciunt quam fugiat saepe! Nesciunt, veniam qui magnam nulla aperiam nisi natus aspernatur eius, fuga sed itaque ratione esse consectetur!
          Voluptatum iure harum maxime, repellendus dolores temporibus officia deleniti illum modi animi esse eveniet cumque assumenda veritatis aperiam nam molestiae quia in mollitia odio! Assumenda sed soluta iusto? In, corrupti.
          Facere, culpa est. Vitae, iste. Itaque quaerat corrupti mollitia quam temporibus pariatur illo numquam, tempore alias aperiam nisi voluptatem velit sit consequuntur assumenda corporis et consectetur recusandae id aut nihil?
          Vel explicabo ratione, sed fugiat magnam ullam eius consequatur nesciunt atque voluptate esse cupiditate sit id voluptatibus asperiores! Eligendi, magni nemo asperiores iure voluptatum consectetur tempore corrupti vero harum reiciendis.
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single