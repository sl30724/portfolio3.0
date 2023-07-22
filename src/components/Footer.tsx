
export default function Footer() {
    return (
        <footer>
            <div className='footer'>
                <p className='small'>© 2023 Sandy Lee | Built with Figma, React, and Coffee</p>
                <div className='footerNav'>
                    <div className='footerNavCol'>
                        <h5 className='gradientText'>Elsewhere</h5>
                        <ul>
                            <li><a className='subtitle' href='https://www.behance.net/sandylee17' target='_blank' rel='noreferrer'>Behance</a></li>
                            <li><a className='subtitle' href='https://github.com/sl30724' target='_blank' rel='noreferrer'>Github</a></li>
                        </ul>
                    </div>
                    <div className='footerNavCol'>
                        <h5 className='gradientText'>Contact</h5>
                        <ul>
                            <li><a className='subtitle' href='https://www.behance.net/sandylee17' target='_blank' rel='noreferrer'>LinkedIn</a></li>
                            <li><a className='subtitle' href='mailto:work@sandylee.site?bcc=sl30724@gmail.com' target='_blank' rel='noreferrer'>Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}