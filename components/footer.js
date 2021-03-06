import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Yanick Saint-Elien is a Life Skills Advocate. Focusing on developing educational content for a better life. | Yanick Saint-Elien ap fè pwomosyon Konpetans Pou Lavi. Yanick ekri sijè edikatif nan objektif pou w pwofite lavi.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
              href={`https://twitter.com/YanickStelien`}
              className="mx-3 font-bold hover:underline"
            >
              Twitter
            </a>
            <a
              href={`https://github.com/yann15`}
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
            <a
              href={`https://www.facebook.com/agencvhaiti`}
              className="mx-3 font-bold hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
