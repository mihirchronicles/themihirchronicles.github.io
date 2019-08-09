import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
`

const Horizontal = styled.hr`
  border: 1px solid #2789e5;
  background-color: #3d9cdf;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Books" />
      <Content>
      <h1>Bookshelf</h1>
      <Description>Reading is a fun way to experience life and go on an adventure! It is important to make time to read what's fairly academic and super profound. We all know money compounds, but so does knowledge. To maintain lifelong curiosity, I use multi-disciplinary approach to select wide array of books. This bookshelf represents a complete catalog of books I own and/or I have read. Reading other people's list and browsing their bookshelves is a pure joy. Drop me a note if you have a book recommendation.</Description>
      <Horizontal/>
      <h2>2019 Summaries</h2>
        <ol>
          <li><a href="https://github.com/mihirchronicles/book-notes/blob/master/creativity-inc.markdown"><strong>Creativity Inc</strong></a></li>
        </ol>
        <h2>2018 Summaries</h2>
        <ol>
          <li><a href="https://github.com/mihirchronicles/book-notes/blob/master/shoe-dog.markdown"><strong>Shoe Dog</strong></a></li>
          <li><a href="https://github.com/mihirchronicles/book-notes/blob/master/seven-brief-lessons-on-physics.markdown"><strong>Seven Brief Lessons on Physics</strong></a></li>
          <li><a href="https://github.com/mihirchronicles/book-notes/blob/master/sapiens-a-brief-history-of-humankind.markdown"><strong>Sapiens: A Brief History of Humankind</strong></a></li>
          <li><a href="https://github.com/mihirchronicles/book-notes/blob/master/deep-work.markdown"><strong>Deep Work</strong></a></li>
        </ol>
      <h2>No Summaries</h2>
        <ol>
          <li>I Contain Multitudes: The Microbes Within Us and a Grander View of Life</li>
          <li>The Better Angels of Our Nature: Why Violence Has Declined</li>
          <li>Living with a SEAL: 31 Days Training with the Toughest Man on the Planet</li>
          <li>Made to Stick: Why Some Ideas Survive and Others Die</li>
          <li>The Power of Moments: Why Certain Experiences Have Extraordinary Impact</li>
          <li>Big Debt Crises</li>
          <li>Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger</li>
          <li>The Martian</li>
          <li>Man's Search for Meaning</li>
          <li>The Intelligent Investor</li>
          <li>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</li>
          <li>The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers</li>
          <li>Becoming Steve Jobs: The Evolution of a Reckless Upstart into a Visionary Leader</li>
          <li>Zero to One: Notes on Startups, or How to Build the Future</li>
          <li>Misbehaving: The Making of Behavioral Economics</li>
          <li>Steve Jobs</li>
          <li>Dark Matter</li>
          <li>The Everything Store: Jeff Bezos and the Age of Amazon</li>
          <li>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</li>
          <li>The Snowball: Warren Buffett and the Business of Life</li>
          <li>How Google Works</li>
          <li>The Power of Habit: Why We Do What We Do in Life and Business</li>
          <li>The Hitchhiker's Guide to the Galaxy</li>
          <li>The Creator's Code The Six Essential Skills of Extraordinary Entrepreneurs</li>
          <li>The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future</li>
          <li>Being Logical: A Guide to Good Thinking</li>
          <li>Grit</li>
          <li>The Big Short</li>
          <li>Flash Boys</li>
          <li>Built to Last</li>
          <li>Good to Great</li>
          <li>Failure is not an Option</li>
          <li>Predictable Revenue</li>
          <li>The Phoenix Project</li>
          <li>Common Stocks and Uncommon Profits</li>
          <li>Surely You're Joking, Mr. Feynman</li>
          <li>Meditations</li>
          <li>The Innovators</li>
          <li>Benjamin Franklin</li>
          <li>Morgan</li>
          <li>Andrew Carnegie</li>
          <li>King Capital</li>
          <li>George W Bush</li>
          <li>African American Religious History</li>
          <li>How to Win Friends and Influence People</li>
          <li>Reminiscences of a Stock Operator</li>
          <li>Moneyball</li>
          <li>The Essays of Warren Buffett</li>
          <li>Blink</li>
          <li>Outliers</li>
          <li>Tipping Point</li>
          <li>Influence: The Psychology of Persuasion</li>
          <li>Things a Little Bird Told Me</li>
          <li>Thinking Fast and Slow</li>
          <li>Solar Revolution</li>
          <li>Big Ideas For Curious Minds</li>
          <li>Then We Came to the End</li>
          <li>Dreams from My Father</li>
          <li>The Boy Who Harnessed the Wind</li>
          <li>The Alchemist</li>
          <li>Into The Wild</li>
          <li>Eminem The Way I Am</li>
          <li>The Dream</li>
          <li>His Father's Son</li>
          <li>The Weekend That Changed The Wall Street</li>
          <li>An Autobiogrpahy MK Gandhi</li>
          <li>Extreme Ownership</li>
          <li>Rework</li>
          <li>The Wealth Of Nations Adam Smith</li>
          <li>Knuth's Books on Programming</li>
          <li>Data Structures and Algorithms Made Easy</li>
          <li>Design Patterns</li>
          <li>Introduction To Algorithms</li>
          <li>Head First Design Patterns</li>
          <li>Eloquent Javascript</li>
          <li>Harry Potter Full Volume</li>
          <li>The New Buffettology</li>
          <li>The Pixar Touch</li>
          <li>What It Means To Be A Cub</li>
          <li>The Gene</li>
          <li>Security Analysis</li>
          <li>Drowning in Oil</li>
          <li>Jugaad</li>
          <li>Start Something That Matters</li>
          <li>How Successful People Think</li>
          <li>The Little Book of Mathematical Principles, Theories, & Things</li>
          <li>The New Oxford Guide To Writing</li>
          <li>The Daily Stoic</li>
          <li>The Last Lecture</li>
          <li>Life of Pi</li>
          <li>A Little History of the World</li>
          <li>In the Plex</li>
          <li>The Black Swan</li>
          <li>The Healing of America: A Global Quest for Better, Cheaper, and Fairer Health Care</li>
          <li>Homo Deus: A Brief History of Tomorrow </li>
          <li>Thrive: The Third Metric to Redefining Success and Creating a Life of Well-Being, Wisdom, and Wonder</li>
          <li>How Will You Measure Your Life?</li>
          <li>American Lion: Andrew Jackson in the White House</li>
          <li>High Output Management</li>
          <li>Cathedral of the Wild</li>
          <li>Geometry of Design by Kim Elam</li>
          <li>Elements of Design by Gail Hannah</li>
          <li>Visual Grammar by Christian Leborg</li>
          <li>Interaction of Color</li>
          <li>Factfulness</li>
          <li>Seeking Wisdom: From Darwin to Munger — Peter Bevelin</li>
          <li>Against the Gods: The Remarkable Story of Risk</li>
          <li>The Story of Philosophy: The Lives and Opinions of the World's Greatest Philosophers</li>
          <li>The Lessons of History</li>
          <li>Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers</li>
          <li>A Brief History of Time by Stephen Hawking (1988)</li>
          <li>Charlie Munger: The Complete Investor (Columbia Business School Publishing)</li>
          <li>The Book of Life: Daily Meditations with Krishnamurti</li>
          <li>Stories of Your Life and Others</li>
          <li>Thing Explainer: Complicated Stuff in Simple Words</li>
          <li>The Little Book of Common Sense Investing</li>
          <li>Einstein: His Life and Universe</li>
          <li>Endurance: Shackleton’s Incredible Voyage — Alfred Lansing</li>
          <li>Walt Disney: The Triumph of the American Imagination — Neal Gabler</li>
          <li>Titan: The Life of John D. Rockefeller, Sr. — Ron Chernow</li>
          <li>Sam Walton: Made in America — Sam Walton</li>
          <li>Genome: The Autobiography of a Species in 23 Chapters — Matt Ridley</li>
          <li>When Breath Becomes Air</li>
          <li>The Wright Brothers by David McCullough</li>
          <li>The Great Depression: A Diary by Benjamin Roth</li>
          <li>Why Moats Matter: The Morningstar Approach to Stock Investing</li>
          <li>Self-Reliance and Other Essays by Ralph Waldo Emerson</li>
          <li>The Upanishads, 2nd Edition by Eknath Easwaran</li>
          <li>The Hero with a Thousand Faces (The Collected Works of Joseph Campbell)</li>
          <li>Reflections on the Art of Living: A Joseph Campbell Companion</li>
          <li>Walking by Henry David Thoreau</li>
          <li>Walden by Henry David Thoreau</li>
          <li>Antifragile: Things That Gain from Disorder by Nassim Nicholas Taleb</li>
          <li>As One Is: To Free the Mind from All Conditioning by J Krishnamurti</li>
          <li>Tao Te Ching: A New English Version (Perennial Classics) by Lao Tzu</li>
          <li>Ray Bradbury's Fahrenheit 451</li>
          <li>George Orwell's 1984</li>
          <li>Brave New World</li>
          <li>Turn the Ship Around!: A True Story of Turning Followers into Leaders</li>
          <li>Sex at Dawn: How We Mate, Why We Stray, and What it Means for Modern Relationships</li>
          <li>The Fifth Risk</li>
          <li>Lost and Founder: A Painfully Honest Field Guide to the Startup World</li>
          <li>Crushing It!: How Great Entrepreneurs Build Their Business and Influence-and How You Can, Too</li>
          <li>The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success</li>
          <li>Liar's Poker</li>
          <li>Bad Blood: Secrets and Lies in a Silicon Valley Startup</li>
          <li>Killing Pablo: The Hunt for the World's Greatest Outlaw</li>
        </ol>
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
