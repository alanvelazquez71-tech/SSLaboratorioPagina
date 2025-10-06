

interface Header{
    texto:String,
    href:String
}


interface Headers{
    headers:Header[]
}

export default function Header({ headers }:Headers) {

    return (
        <header>
            <nav>

                {headers.map((item:Header,index:number) => <a key={index} href={`${item.href}`}>{item.texto}</a>)}

            </nav>
        </header>
    )

}
