import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
      <h1>Bookshelf</h1>
      <Description>Reading is a fun way to experience life and go on an adventure! It is important to make time to read what's fairly academic and super profound. We all know money compounds, but so does knowledge. To maintain lifelong curiosity, I use multi-disciplinary approach to select wide array of books. This bookshelf represents a complete catalog of books I own and/or I have read. Reading other people's list and browsing their bookshelves is a pure joy. Drop me a note if you have a book recommendation.</Description>
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
          <li><strong>I Contain Multitudes: The Microbes Within Us and a Grander View of Life</strong></li>
          <li><strong>The Better Angels of Our Nature: Why Violence Has Declined</strong></li>
          <li><strong>Living with a SEAL: 31 Days Training with the Toughest Man on the Planet</strong></li>
          <li><strong>Made to Stick: Why Some Ideas Survive and Others Die</strong></li>
          <li><strong>The Power of Moments: Why Certain Experiences Have Extraordinary Impact</strong></li>
          <li><strong>Big Debt Crises</strong></li>
          <li><strong>Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger</strong></li>
          <li><strong>The Martian</strong></li>
          <li><strong>Man's Search for Meaning</strong></li>
          <li><strong>The Intelligent Investor</strong></li>
          <li><strong>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</strong></li>
          <li><strong>The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers</strong></li>
          <li><strong>Becoming Steve Jobs: The Evolution of a Reckless Upstart into a Visionary Leader</strong></li>
          <li><strong>Zero to One: Notes on Startups, or How to Build the Future</strong></li>
          <li><strong>Misbehaving: The Making of Behavioral Economics</strong></li>
          <li><strong>Steve Jobs</strong></li>
          <li><strong>Dark Matter</strong></li>
          <li><strong>The Everything Store: Jeff Bezos and the Age of Amazon</strong></li>
          <li><strong>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</strong></li>
          <li><strong>The Snowball: Warren Buffett and the Business of Life</strong></li>
          <li><strong>How Google Works</strong></li>
          <li><strong>The Power of Habit: Why We Do What We Do in Life and Business</strong></li>
          <li><strong>The Hitchhiker's Guide to the Galaxy</strong></li>
          <li><strong>The Creator's Code The Six Essential Skills of Extraordinary Entrepreneurs</strong></li>
          <li><strong>The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future</strong></li>
          <li><strong>Being Logical: A Guide to Good Thinking</strong></li>
          <li><strong>Grit</strong></li>
          <li><strong>The Big Short</strong></li>
          <li><strong>Flash Boys</strong></li>
          <li><strong>Built to Last</strong></li>
          <li><strong>Good to Great</strong></li>
          <li><strong>Failure is not an Option</strong></li>
          <li><strong>Predictable Revenue</strong></li>
          <li><strong>The Phoenix Project</strong></li>
          <li><strong>Common Stocks and Uncommon Profits</strong></li>
          <li><strong>Surely You're Joking, Mr. Feynman</strong></li>
          <li><strong>Meditations</strong></li>
          <li><strong>The Innovators</strong></li>
          <li><strong>Benjamin Franklin</strong></li>
          <li><strong>Morgan</strong></li>
          <li><strong>Andrew Carnegie</strong></li>
          <li><strong>King Capital</strong></li>
          <li><strong>George W Bush</strong></li>
          <li><strong>African American Religious History</strong></li>
          <li><strong>How to Win Friends and Influence People</strong></li>
          <li><strong>Reminiscences of a Stock Operator</strong></li>
          <li><strong>Moneyball</strong></li>
          <li><strong>The Essays of Warren Buffett</strong></li>
          <li><strong>Blink</strong></li>
          <li><strong>Outliers</strong></li>
          <li><strong>Tipping Point</strong></li>
          <li><strong>Influence: The Psychology of Persuasion</strong></li>
          <li><strong>Things a Little Bird Told Me</strong></li>
          <li><strong>Thinking Fast and Slow</strong></li>
          <li><strong>Solar Revolution</strong></li>
          <li><strong>Big Ideas For Curious Minds</strong></li>
          <li><strong>Then We Came to the End</strong></li>
          <li><strong>Dreams from My Father</strong></li>
          <li><strong>The Boy Who Harnessed the Wind</strong></li>
          <li><strong>The Alchemist</strong></li>
          <li><strong>Into The Wild</strong></li>
          <li><strong>Eminem The Way I Am</strong></li>
          <li><strong>The Dream</strong></li>
          <li><strong>His Father's Son</strong></li>
          <li><strong>The Weekend That Changed The Wall Street</strong></li>
          <li><strong>An Autobiogrpahy MK Gandhi</strong></li>
          <li><strong>Extreme Ownership</strong></li>
          <li><strong>Rework</strong></li>
          <li><strong>The Wealth Of Nations Adam Smith</strong></li>
          <li><strong>Knuth's Books on Programming</strong></li>
          <li><strong>Data Structures and Algorithms Made Easy</strong></li>
          <li><strong>Design Patterns</strong></li>
          <li><strong>Introduction To Algorithms</strong></li>
          <li><strong>Head First Design Patterns</strong></li>
          <li><strong>Eloquent Javascript</strong></li>
          <li><strong>Harry Potter Full Volume</strong></li>
          <li><strong>The New Buffettology</strong></li>
          <li><strong>The Pixar Touch</strong></li>
          <li><strong>What It Means To Be A Cub</strong></li>
          <li><strong>The Gene</strong></li>
          <li><strong>Security Analysis</strong></li>
          <li><strong>Drowning in Oil</strong></li>
          <li><strong>Jugaad</strong></li>
          <li><strong>Start Something That Matters</strong></li>
          <li><strong>How Successful People Think</strong></li>
          <li><strong>The Little Book of Mathematical Principles, Theories, & Things</strong></li>
          <li><strong>The New Oxford Guide To Writing</strong></li>
          <li><strong>The Daily Stoic</strong></li>
          <li><strong>The Last Lecture</strong></li>
          <li><strong>Life of Pi</strong></li>
          <li><strong>A Little History of the World</strong></li>
          <li><strong>In the Plex</strong></li>
          <li><strong>The Black Swan</strong></li>
          <li><strong>The Healing of America: A Global Quest for Better, Cheaper, and Fairer Health Care</strong></li>
          <li><strong>Homo Deus: A Brief History of Tomorrow </strong></li>
          <li><strong>Thrive: The Third Metric to Redefining Success and Creating a Life of Well-Being, Wisdom, and Wonder</strong></li>
          <li><strong>How Will You Measure Your Life?</strong></li>
          <li><strong>American Lion: Andrew Jackson in the White House</strong></li>
          <li><strong>High Output Management</strong></li>
          <li><strong>Cathedral of the Wild</strong></li>
          <li><strong>Geometry of Design by Kim Elam</strong></li>
          <li><strong>Elements of Design by Gail Hannah</strong></li>
          <li><strong>Visual Grammar by Christian Leborg</strong></li>
          <li><strong>Interaction of Color</strong></li>
          <li><strong>Factfulness</strong></li>
          <li><strong>Seeking Wisdom: From Darwin to Munger — Peter Bevelin</strong></li>
          <li><strong>Against the Gods: The Remarkable Story of Risk</strong></li>
          <li><strong>The Story of Philosophy: The Lives and Opinions of the World's Greatest Philosophers</strong></li>
          <li><strong>The Lessons of History</strong></li>
          <li><strong>Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers</strong></li>
          <li><strong>A Brief History of Time by Stephen Hawking (1988)</strong></li>
          <li><strong>Charlie Munger: The Complete Investor (Columbia Business School Publishing)</strong></li>
          <li><strong>The Book of Life: Daily Meditations with Krishnamurti</strong></li>
          <li><strong>Stories of Your Life and Others</strong></li>
          <li><strong>Thing Explainer: Complicated Stuff in Simple Words</strong></li>
          <li><strong>The Little Book of Common Sense Investing</strong></li>
          <li><strong>Einstein: His Life and Universe</strong></li>
          <li><strong>Endurance: Shackleton’s Incredible Voyage — Alfred Lansing</strong></li>
          <li><strong>Walt Disney: The Triumph of the American Imagination — Neal Gabler</strong></li>
          <li><strong>Titan: The Life of John D. Rockefeller, Sr. — Ron Chernow</strong></li>
          <li><strong>Sam Walton: Made in America — Sam Walton</strong></li>
          <li><strong>Genome: The Autobiography of a Species in 23 Chapters — Matt Ridley</strong></li>
          <li><strong>When Breath Becomes Air</strong></li>
          <li><strong>The Wright Brothers by David McCullough</strong></li>
          <li><strong>The Great Depression: A Diary by Benjamin Roth</strong></li>
          <li><strong>Why Moats Matter: The Morningstar Approach to Stock Investing</strong></li>
          <li><strong>Self-Reliance and Other Essays by Ralph Waldo Emerson</strong></li>
          <li><strong>The Upanishads, 2nd Edition by Eknath Easwaran</strong></li>
          <li><strong>The Hero with a Thousand Faces (The Collected Works of Joseph Campbell)</strong></li>
          <li><strong>Reflections on the Art of Living: A Joseph Campbell Companion</strong></li>
          <li><strong>Walking by Henry David Thoreau</strong></li>
          <li><strong>Walden by Henry David Thoreau</strong></li>
          <li><strong>Antifragile: Things That Gain from Disorder by Nassim Nicholas Taleb</strong></li>
          <li><strong>As One Is: To Free the Mind from All Conditioning by J Krishnamurti</strong></li>
          <li><strong>Tao Te Ching: A New English Version (Perennial Classics) by Lao Tzu</strong></li>
          <li><strong>Ray Bradbury's Fahrenheit 451</strong></li>
          <li><strong>George Orwell's 1984</strong></li>
          <li><strong>Brave New World</strong></li>
          <li><strong>Turn the Ship Around!: A True Story of Turning Followers into Leaders</strong></li>
          <li><strong>Sex at Dawn: How We Mate, Why We Stray, and What it Means for Modern Relationships</strong></li>
          <li><strong>The Fifth Risk</strong></li>
          <li><strong>Lost and Founder: A Painfully Honest Field Guide to the Startup World</strong></li>
          <li><strong>Crushing It!: How Great Entrepreneurs Build Their Business and Influence-and How You Can, Too</strong></li>
          <li><strong>The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success</strong></li>
          <li><strong>Liar's Poker</strong></li>
          <li><strong>Bad Blood: Secrets and Lies in a Silicon Valley Startup</strong></li>
          <li><strong>Killing Pablo: The Hunt for the World's Greatest Outlaw</strong></li>
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
