import { textContent, contactData, studentRecords, contacts, branches, openUniv, contents } from '@heading/contactus.js'

const Contact = () => {
    return (
      <div className="w-full px-4 py-8 container-body">
        <div className="flex flex-row">
          <div className="w-9/12 ">
            <h1 className="text-lg leading-7 text-left text-[24pt] text-red font-bold">Contact us</h1>
            {textContent.map((content, index) => (
              <p key={index} className={content.classes}>
                {content.text}
              </p>
            ))}
            <h2 className="text-base font-bold leading-7 text-left text-rd">E-mail</h2>
            <h3 className="mt-1 text-sm text-left text-rd">For general concerns</h3>
            <p className="mb-7">
              <span className="text-2xl text-gr contact-span">inquire@pup.edu.ph</span>
            </p>
  
            <table className="mb-4 border border-collapse table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-1 text-sm font-thin border text-rd ">Specific Concerns</th>
                  <th className="p-1 text-sm font-thin border text-rd ">E-mail</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((data, index) => (
                  <tr key={index}>
                    <td className={`border hover:text-orange text-gr ${data.classes}`}>{data.title}</td>
                    <td className={`w-44 hover:text-orange border p-1 text-right text-gr`}>{data.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2 className="text-base font-bold leading-7 text-left text-rd">Postal Mail and Telephone</h2>
            <h3 className="mt-1 text-sm text-left text-rd">
              For inquiries regarding student records (transcript, diploma, certification):
            </h3>
            <blockquote>
              {studentRecords.map((contact, index) => (
                <div key={index}>
                  <p className="text-gr blockquote"></p>
                  {contact.details.map((detail, index) =>
                    detail === 'Office of the University Registrar' ? (
                      <strong className="text-gr blockquote-p" key={detail}>
                        {detail}
                      </strong>
                    ) : (
                      <p key={index} className="text-gr blockquote-p">
                        {detail}
                        <br />
                      </p>
                    )
                  )}
                </div>
              ))}
            </blockquote>
            <h3 className="mt-0 text-sm text-left text-rd">For admission inquiries:</h3>
            <blockquote>
              {contacts.map((records, index) => (
                <div key={index}>
                  {records.address.map((line, index) =>
                    line === 'Admission Services' ? (
                      <strong className="text-gr blockquote-p" key={line}>
                        {line}
                      </strong>
                    ) : (
                      <p key={index} className="text-gr blockquote-p">
                        {line}
                      </p>
                    )
                  )}
                  <div>
                    {records.phone.map((number, index) => (
                      <p key={index} className="text-gr blockquote-p">
                        {number}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </blockquote>
            <h3 className="mt-0 text-sm text-left text-rd">For inquiries regarding the PUP Branches and Campuses:</h3>
            <blockquote>
              {branches.map((branch, index) => (
                <div key={index}>
                  {branch.name.map((title, index) =>
                    title === 'Office of the Vice President for Branches and Campuses' ? (
                      <strong className="text-gr blockquote-p" key={title}>
                        {title}
                      </strong>
                    ) : (
                      <p key={index} className="text-gr blockquote-p">
                        {title}
                      </p>
                    )
                  )}
                  {branch.address.map((line, index) => (
                    <p key={index} className="text-gr blockquote-p">
                      {line}
                    </p>
                  ))}
                  {branch.phone.map((number, index) => (
                    <p key={index} className="text-gr blockquote-p">
                      {number}
                    </p>
                  ))}
                </div>
              ))}
            </blockquote>
            <h3 className="mt-0 text-sm text-left text-rd">For PUP Open University inquiries:</h3>
            <blockquote>
              {openUniv.map((contact, index) => (
                <p key={index} className="text-gr blockquote-p">
                  {contact.name}
                  <br />
                  <strong className="text-gr blockquote-p">{contact.department}</strong>
                  <br />
                  {contact.address.map((line) => (
                    <>
                      {line}
                      <br />
                    </>
                  ))}
                  {contact.phone.map((number) => (
                    <>
                      {number}
                      <br />
                    </>
                  ))}
                </p>
              ))}
            </blockquote>
            <p className="text-gr body-font">
              <strong>Telephone</strong>
            </p>
            <a className="mt-1 text-rd hover:underline body-font" href="contactinformation.aspx">
              View contact information of specific offices and departments
            </a>
          </div>
          <div className='w-3/12 px-4'>
            <div className="overflow-hidden mb-50">
              <h4 className="text-[14px] text-left mb-0 font-thin text-rd">CONTENTS</h4>
              <div className="absolute block w-10 h-0.5 bg-gray-300"></div>
              <ul className='block w-full mt-1 divide-y text-gr'>
                {contents.map((content, index) => (
                  <li className='py-1.5 ' key={index}>
                    <p className='text-left transition duration-300 ease-in-out transform hover:text-rd hover:translate-x-2'>
                    <a className='body-font' href={content.href}>{content.title}</a>
                  </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Contact