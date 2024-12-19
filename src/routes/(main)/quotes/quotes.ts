export interface quote {
	name: string;
	quote: string;
}
export interface section {
	icon: string;
	quotes: quote[];
}

export let quotes: Map<string, section> = new Map([
	[
		'Reading Code',
		{
			quotes: [
				{
					name: 'Alan Kay',
					quote:
						'If most computer people lack understanding and knowledge, then what they will select will also be lacking.'
				},
				{
					name: 'Tom Love (inventor of Objective C)',
					quote:
						'The software business is one of the few places we teach people to write before we teach them to read.'
				},
				{
					name: 'Dave Cheney',
					quote: 'Code is read many more times than it is written.'
				},
				{
					name: 'Gerald M. Weinberg',
					quote:
						'Programming is, among other things, a kind of writing. One way to learn writing is to write, but in all other forms of writing, one also reads. We read examples both good and bad to facilitate learning. But how many programmers learn to write programs by reading programs?'
				},
				{
					name: 'Katrina Owen',
					quote: 'Skill develops when we produce, not consume.'
				}
			]
		}
	],
	[
		'Legacy Software',
		{
			quotes: [
				{
					quote:
						'There are two kinds of software projects: those that fail, and those that turn into legacy horrors.',
					name: 'Peter Weinberger (inventor of AWK)'
				},
				{
					quote:
						'Legacy software is an unappreciated but serious problem. Legacy code may be the downfall of our civilization.',
					name: 'Chuck Moore(inventor of Forth)'
				},
				{
					quote:
						'Few programmers of any experience would contradict the assertion that most programs are modified in their lifetime. Why then do we rarely find a program that contains any evidence of having been written with an eye to subsequent modification.',
					name: 'Gerald M.Weinberg'
				},
				{
					quote:
						"We think awful code is written by awful devs. But in reality, it's written by reasonable devs in awful circumstances.",
					name: 'Sarah Mei'
				},
				{
					quote:
						'There are many reasons why programs are built the way they are, although we may fail to recognize the multiplicity of reasons because we usually look at code from the outside rather than by reading it. When we do read code, we find that some of it gets written because of machine limitations, some because of language limitations, some because of programmer limitations, some because of historical accidents, and some because of specifications—both essential and inessential.',
					name: 'Gerald M.Weinberg'
				}
			]
		}
	],

	[
		'Mental Models',
		{
			quotes: [
				{
					quote:
						"Let's imagine a project that's going to end up with a million lines of code or more. The probability of those projects being successful in the United States these days is very low - well under 50%. That's debatable.",
					name: ' Tom Love (inventor of Objective C)'
				},
				{
					quote: '100k lines of code fit inside a box of paper.',
					name: ' Tom Love (inventor of Objective C)'
				},
				{
					quote:
						'One of our many problems with thinking is “cognitive load”: the number of things we can pay attention to at once. The cliche is 7±2, but for many things it is even less. We make progress by making those few things be more powerful.',
					name: ' Alan Kay'
				},
				{
					quote:
						"The hardest bugs are those where your mental model of the situation is just wrong, so you can't see the problem at all.",
					name: ' Brian Kernighan'
				},
				{
					quote:
						"Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
					name: ' Brian Kernighan'
				},
				{
					quote: "Debuggers don't remove bugs. They only show them in slow motion.",
					name: ' Unknown'
				},
				{
					quote: 'Fixing bugs is just a side effect. Debuggers are for exploration.',
					name: ' @Deech (Twitter)'
				}
			]
		}
	],
	[
		'Productivity vs Performance',
		{
			quotes: [
				{
					quote:
						'The hope is that the progress in hardware will cure all software ills. However, a critical observer may observe that software manages to outgrow hardware in size and sluggishness. Other observers had noted this for some time before, indeed the trend was becoming obvious as early as 1987.',
					name: 'Niklaus Wirth'
				},
				{
					quote:
						'The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.',
					name: 'Henry Petroski (2015)'
				},
				{
					quote:
						'The hardware folks will not put more cores into their hardware if the software isn’t going to use them, so, it is this balancing act of each other staring at each other, and we are hoping that Go is going to break through on the software side.',
					name: 'Rick Hudson (2015)'
				},
				{
					quote:
						"C is the best balance I've ever seen between power and expressiveness. You can do almost anything you want to do by programming fairly straightforwardly and you will have a very good mental model of what's going to happen on the machine; you can predict reasonably well how quickly it's going to run, you understand what's going on ....",
					name: 'Brian Kernighan (2000)'
				},
				{
					quote:
						'The trend in programming language design has been to create languages that enhance software reliability and programmer productivity. What we should do is develop languages alongside sound software engineering practices so the task of developing reliable programs is distributed throughout the software lifecycle, especially into the early phases of system design.',
					name: 'Al Aho (2009)'
				}
			]
		}
	],
	[
		'Correctness vs Performance',
		{
			quotes: [
				{
					quote: 'Make it correct, make it clear, make it concise, make it fast. In that order.',
					name: 'Wes Dye'
				},
				{
					quote:
						'Good engineering is less about finding the perfect solution and more about understanding the tradeoffs and being able to explain them.',
					name: 'JBD'
				},
				{
					quote:
						'Choosing the right limitations for a certain problem domain is often much more powerful than allowing anything.',
					name: 'Jason Moiron'
				},
				{
					quote:
						'The correctness of the implementation is the most important concern, but there is no royal road to correctness. It involves diverse tasks such as thinking of invariants, testing and code reviews. Optimization should be done, but not prematurely.',
					name: 'Al Aho (inventor of AWK)'
				},
				{
					quote:
						"The basic ideas of good style, which are fundamental to write clearly and simply, are just as important now as they were 35 years ago. Simple, straightforward code is just plain easier to work with and less likely to have problems. As programs get bigger and more complicated, it's even more important to have clean, simple code.",
					name: 'Brian Kernighan'
				},
				{
					quote:
						"Problems can usually be solved with simple, mundane solutions. That means there's no glamorous work. You don't get to show off your amazing skills. You just build something that gets the job done and then move on. This approach may not earn you oohs and aahs, but it lets you get on with it.",
					name: 'Jason Fried'
				}
			]
		}
	],
	[
		'Senior vs Junior Developers',
		{
			quotes: [
				{
					quote: 'You are personally responsible for the software you write.',
					name: 'Stephen Bourne (Bourne shell)'
				},
				{
					quote:
						'And the difference between juniors+seniors to those who are in between, is the confidence to ask dumb questions.',
					name: 'Natalie Pistunovich'
				},
				{
					quote:
						"Mistakes are an inevitable consequence of doing something new and, as such, should be seen as valuable; without them, we'd have no originality.",
					name: 'Ed Catmull (President of Pixar)'
				},
				{
					quote:
						'It takes considerable knowledge just to realize the extent of your own ignorance.',
					name: 'Thomas Sowell'
				},
				{
					quote: 'If you don’t make mistakes, you’re not working on hard enough problems.',
					name: ' Frank Wilczek'
				},
				{
					quote: 'Don’t cling to a mistake because you spent so much time making it.',
					name: ' Aubrey de Grey'
				}
			]
		}
	],
	[
		'Integrity',
		{
			quotes: [
				{
					quote:
						'Failure is expected, failure is not an odd case. Design systems that help you identify failure. Design systems that can recover from failure.',
					name: 'JBD'
				},
				{
					quote:
						'Product excellence is the difference between something that only works under certain conditions, and something that only breaks under certain conditions.',
					name: 'Kelsey Hightower'
				},
				{
					quote: 'Instability is a drag on innovation.',
					name: 'Yehudah Katz'
				}
			]
		}
	],
	[
		'Readability',
		{
			quotes: [
				{
					quote:
						'This is a cardinal sin amongst programmers. If code looks like it’s doing one thing when it’s actually doing something else, someone down the road will read that code and misunderstand it, and use it or alter it in a way that causes bugs. That someone might be you, even if it was your code in the first place.',
					name: 'Nate Finch'
				}
			]
		}
	],
	[
		'Average Developer',
		{
			quotes: [
				{
					quote:
						'Can you explain it to the median user (developer)? as opposed to will the smartest user (developer) figure it out?',
					name: 'Peter Weinberger (inventor of AWK)'
				}
			]
		}
	],
	[
		'Real Machine',
		{
			quotes: [
				{
					quote:
						'Making things easy to do is a false economy. Focus on making things easy to understand and the rest will follow.',
					name: 'Peter Bourgon'
				},
				{
					quote: 'Reducing complexity is more powerful than hiding it.',
					name: 'Chris Hines'
				}
			]
		}
	],
	[
		'Simplicity',
		{
			quotes: [
				{
					quote:
						'Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. And to make matters worse: complexity sells better.',
					name: 'Edsger W. Dijkstra'
				},
				{
					quote: 'Everything should be made as simple as possible, but not simpler.',
					name: 'Albert Einstein'
				},
				{
					quote: 'You wake up and say, I will be productive, not simple, today.',
					name: 'Dave Cheney'
				}
			]
		}
	],
	[
		'Encapsulation',
		{
			quotes: [
				{
					quote:
						'(Paraphrasing: Encapsulation and the separation of concerns are drivers for designing software. This is largely based on how other industries handle complexity. There seems to be a human pattern of using encapsulation to wrestle complexity to the ground.',
					name: 'Brad Cox (inventor of Objective C)'
				},
				{
					quote:
						'The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.',
					name: 'Edsger W. Dijkstra'
				},
				{
					quote:
						'A proper abstraction decouples the code so that every change doesn’t echo throughout the entire code base.',
					name: 'Ronna Steinburg'
				},
				{
					quote: 'A good API is not just easy to use but also hard to misuse.',
					name: 'JBD'
				},
				{
					quote:
						'Computing is all about abstractions. Those below yours are just details. Those above yours are limiting complicated crazy town.',
					name: 'Joe Beda'
				}
			]
		}
	],
	[
		'Performance',
		{
			quotes: [
				{
					quote:
						'Programmers waste enormous amounts of time thinking about, or worrying about, the speed of noncritical parts of their programs, and these attempts at efficiency actually have a strong negative impact when debugging and maintenance are considered. We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%.',
					name: 'Donald E. Knuth'
				},
				{
					quote:
						"I don't trust anything until it runs... In fact, I don't trust anything until it runs twice.",
					name: 'Andrew Gelman (one of the greatest living statisticians at Columbia University).'
				}
			]
		}
	],
	[
		'Broad Engineering',
		{
			quotes: [
				{
					quote:
						"When we're computer programmers we're concentrating on the intricate little fascinating details of programming and we don't take a broad engineering point of view about trying to optimize the total system. You try to optimize the bits and bytes.",
					name: 'Tom Kurtz (inventor of BASIC)'
				}
			]
		}
	]
]);
