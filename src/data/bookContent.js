
export const bookPages = [
  {
    id: 'what-is-quantum',
    title: 'What is Quantum Computing?',
    content: [
      `When someone talks about "quantum," they are talking about the smallest scale of things in our universe. At the "quantum" scale, particles and energy act in ways that seem contrary to what we know about the world. At the quantum scale, under the right conditions, particles can act like they are in multiple places at once, they can be linked with other far-away particles, and the line between particles and pure energy is blurred! In fact, scientists only started to notice these bizarre behaviors about 100 years ago, and thus the field of quantum mechanics was born.`,
      `In the modern day, scientists and engineers are trying to harness the power of these quantum phenomena. They are working hard to build computers that are stronger, faster, and more secure than the computers we use today. These computers will use the main principles of quantum mechanics to process large amounts of data in a small amount of time, all while ensuring hackers can't steal information. Quantum computers may not necessarily replace our laptops, phones, or video game consoles, but they will be able to securely encode and decode information, simulate molecules and chemical reactions for medicine, develop better models of climate change, and help to better understand the world around us.`,
      `As we begin to understand the quantum realm better, we expect quantum computers to help us in many industries-medicine, banking, energy, and more. As you color your way through this book, we hope that you discover something new about quantum computing.`
    ],
    image: ''
  },
  {
    id: 'origins',
    title: 'The Origins of Quantum Computing',
    content: [
      `Who came up with the idea of quantum computing? Well, it's difficult to pinpoint one single person. In 1980, Russian mathematician Yuri Manin was the first to suggest that a computer could run on quantum behavior instead of classical behavior, in a mathematics book about computable functions. The following year, American physicist Richard Feynman independently suggested a similar idea, stating in a famous lecture: "If you want to make a simulation of nature, you'd better make it quantum mechanical, and by golly it's a wonderful problem, because it doesn't look so easy." These were the first instances of this idea of **quantum simulation**, which paved the way for quantum computing as we know it today.`
    ],
    image: '/sketches/origins.png'
  },
  {
    id: 'father',
    title: 'The Father of Quantum Computing',
    content: [
      `In 1985, David Deutsch, otherwise known as "the father of quantum computing," was the first to dream up a universal quantum computer. He imagined it acting like a Turing machine, which is a simple machine able to simulate any computer algorithm (like cracking encrypted code in World War II). Like a Turing machine, a universal quantum computer would use universal quantum gates, which follow simple rules the quantum computer would follow, to simulate any problem it was given. Deutsch also proved in 1992 that quantum computers will be able to solve certain problems faster than any classical computer that could ever be built. Today's classical computers store information in bits, which can be 0 or 1. Quantum computers store information in qubits, which are not restricted to being only 0 or 1 but can be a combination of both at the same time. Deutsch proved that this unique property allows quantum computers to solve some problems much faster.`
    ],
    image: '/sketches/father.png'
  },
  {
    id: 'entanglement',
    title: 'Entanglement',
    content: [
      `Entanglement is a concept that describes how two particles can be tied together. Particles have properties like position, momentum, and spin. Think of a particle like a spinning top-it has a place, somewhere it is moving to, and a direction that it spins. Tops can spin clockwise or counterclockwise, and similarly, particles can spin up or down. However, unlike tops, particles can be entangled. When particles are entangled, measuring the properties of one particle instantly tells us something about the other particle, no matter how far apart they are. For example, if two particles are entangled, their spins must be equal and opposite: one up and one down.`,
      `Quantum computers use fundamental quantum characteristics like entanglement to solve certain types of problems in ways that regular computers cannot. Entanglement lets the computers explore more possibilities at once for answers to problems, making them exponentially faster than regular computers in some cases.`
    ],
    image: '/sketches/entanglement.png'
  },
  {
    id: 'superposition',
    title: 'Superposition',
    content: [
      `Qubits (quantum bits) are what store data in a quantum computer. Unlike regular computer bits that can only be 0 or 1, qubits can exist in multiple states at the same time-this is called superposition. Imagine a coin spinning on a table-when it's spinning, it's kind of both heads and tails at once; but when it stops spinning and falls, it has to be either one or the other.`,
      `When a qubit is in superposition, it can be a combination of the 0 and 1 states until it's measured. When scientists measure a qubit, it collapses to either 0 or 1, just like how a spinning coin falls to either heads or tails. Superposition is what makes entanglement between qubits possible. When multiple entangled qubits work together, quantum computers can explore many possible solutions at once, which helps them solve difficult problems in an efficient way.`
    ],
    image: '/sketches/superposition.png'
  },
  {
    id: 'coherence',
    title: 'Coherence',
    content: [
      `Particles have properties like position, momentum, and spin. Anything that happens in the environment around a particle can affect these properties, or the state, of the particle. If the temperature changes or the particle is bumped, it can go through decoherence, or lose its special quantum properties. We can think of coherence like trying to keep a spinning top perfectly balanced-any small disturbance can make it wobble and fall.`,
      `In quantum computers, scientists need the qubits to stay coherent long enough to solve problems, or in other words, complete calculations. Scientists work hard to protect qubits from disturbances so they can get accurate results when solving problems with quantum computers.`
    ],
    image: '/sketches/coherence.png'
  },
  {
    id: 'bits-vs-qubits',
    title: 'Bits vs. Qubits',
    content: [
      `The general concept of any computer is that you can use it to store and process information, called data. The smallest piece of information is a bit, which can be set to either 0 or 1. A classical computer uses a long string of bits to represent more complex data like numbers, text, images, and videos.`,
      `A quantum computer uses quantum bits, or qubits, to process information. A qubit can also be 0 or 1, but thanks to the principle of superposition, it can also be in a state that is a combination of both 0 and 1 at the same time. This allows a quantum computer to process a vast amount of information simultaneously, making it much more powerful than a classical computer for certain tasks.`
    ],
    image: '/sketches/bits-vs-qubits.png'
  },
  {
    id: 'uses',
    title: 'Uses of Quantum Computing',
    content: [
      `Quantum computers are not just faster versions of the computers we use today. They are a completely new kind of machine that can solve problems that are impossible for classical computers. For example, quantum computers could be used to simulate the behavior of molecules, which could lead to the discovery of new medicines and materials. They could also be used to optimize complex systems like traffic flow or financial markets, and to break the encryption codes that protect our online information.`,
      `However, quantum computers are still in the early stages of development, and there are many challenges that need to be overcome before they can be widely used. Scientists are working hard to build better qubits, improve error correction, and develop new algorithms that can take advantage of the unique power of quantum computing.`
    ],
    image: '/sketches/uses.png'
  },
  {
    id: 'how-it-works',
    title: 'How Does a Quantum Computer Work?',
    content: [
      `A quantum computer works by manipulating qubits using quantum gates. Just like classical logic gates (AND, OR, NOT) manipulate bits, quantum gates change the state of qubits. However, quantum gates are much more powerful because they can create superposition and entanglement.`,
      `A quantum algorithm is a sequence of quantum gates that performs a specific task. When a quantum algorithm is run, the qubits go through a series of transformations, and at the end, they are measured to get the result. Because of the probabilistic nature of quantum mechanics, the result is not always the same, so the algorithm is often run many times to get the correct answer.`
    ],
    image: ''
  },
  {
    id: 'divincenzo',
    title: 'DiVincenzo Criteria',
    content: [
      `In 2000, theoretical physicist David DiVincenzo proposed a list of five criteria that a physical system must meet to be a practical quantum computer. These criteria are:`,
      `1. A scalable physical system with well-characterized qubits.`,
      `2. The ability to initialize the state of the qubits to a simple fiducial state.`,
      `3. Long relevant decoherence times, much longer than the gate operation time.`,
      `4. A "universal" set of quantum gates.`,
      `5. A qubit-specific measurement capability.`,
      `These criteria are still used today as a checklist for building quantum computers.`
    ],
    image: '/sketches/divincenzo.png'
  },
  {
    id: 'superconducting',
    title: 'Superconducting Circuits',
    content: [
      `One of the leading approaches to building a quantum computer is using superconducting circuits. These are tiny electrical circuits made of superconducting materials that can conduct electricity with zero resistance. When cooled to extremely low temperatures, these circuits can behave like artificial atoms, with discrete energy levels that can be used as qubits.`,
      `Superconducting qubits are relatively easy to control and measure, and they can be fabricated using standard techniques from the semiconductor industry. However, they are also very sensitive to noise and require complex cooling systems to operate.`
    ],
    image: '/sketches/superconducting.png'
  },
  {
    id: 'neutral-atom',
    title: 'Neutral Atom Qubits',
    content: [
      `Another approach is to use individual neutral atoms as qubits. These atoms are trapped in a vacuum using laser beams, which hold them in place and allow them to be manipulated. The internal energy states of the atoms are used as the 0 and 1 states of the qubit.`,
      `Neutral atom qubits have very long coherence times and can be entangled with each other using interactions mediated by highly excited "Rydberg" states. This makes them a promising platform for building large-scale quantum computers.`
    ],
    image: '/sketches/neutral-atom.png'
  },
  {
    id: 'trapped-ion',
    title: 'Trapped Ion Qubits',
    content: [
      `Trapped ion quantum computers use ions (atoms with a net electric charge) as qubits. The ions are trapped in a vacuum using electric fields and manipulated using lasers. The internal energy states of the ions are used as the qubit states.`,
      `Trapped ion qubits have extremely long coherence times and high-fidelity gates, making them one of the most advanced quantum computing technologies. However, scaling up the number of ions in a single trap is challenging.`
    ],
    image: '/sketches/trapped-ion.png'
  },
  {
    id: 'silicon-dots',
    title: 'Silicon Quantum Dots',
    content: [
      `Silicon quantum dots are tiny blobs of silicon that can trap a single electron. The spin of the electron (up or down) is used as the qubit. Because silicon is already used in billions of transistors in classical computers, this approach has the potential to be scalable and compatible with existing manufacturing technology.`,
      `Silicon spin qubits have long coherence times and can be packed very densely on a chip. However, controlling and measuring individual spins in a large array is a difficult engineering challenge.`
    ],
    image: '/sketches/silicon-dots.png'
  },
  {
    id: 'photonic',
    title: 'Photonic Qubits',
    content: [
      `Photonic quantum computers use particles of light, called photons, as qubits. Information can be encoded in the polarization or other properties of the photon. Photons interact very weakly with their environment, so they have very long coherence times.`,
      `Photonic quantum computers can operate at room temperature, which is a major advantage. However, it is difficult to get photons to interact with each other, which is necessary for creating two-qubit gates.`
    ],
    image: '/sketches/photonic.png'
  },
  {
    id: 'solid-state',
    title: 'Solid-State Defects',
    content: [
      `Solid-state defects are impurities or irregularities in a crystal lattice that can act like qubits. A famous example is the nitrogen-vacancy (NV) center in diamond, which consists of a nitrogen atom substituting for a carbon atom next to a missing carbon atom (a vacancy).`,
      `The electron spin of the NV center can be controlled and measured using light and microwaves, even at room temperature. This makes them useful for quantum sensing applications as well as quantum computing.`
    ],
    image: '/sketches/solid-state.png'
  },
  {
    id: 'topological',
    title: 'Topological Qubits',
    content: [
      `Topological quantum computing is a theoretical approach that uses quasiparticles called anyons to store information. The state of the qubit depends on the topological properties of the anyons' paths as they are braided around each other.`,
      `Topological qubits are expected to be much more robust against noise and errors than other types of qubits. However, the existence of the necessary anyons has not yet been conclusively proven, and building a topological quantum computer is still a major research challenge.`
    ],
    image: '/sketches/topological.png'
  },
  {
    id: 'scientists',
    title: 'Who are Quantum Computing Scientists?',
    content: [
      `Quantum computing is a global effort involving thousands of scientists and engineers from many different backgrounds. They work in universities, government labs, and private companies around the world.`,
      `Some are physicists who study the fundamental laws of quantum mechanics. Others are computer scientists who develop new algorithms and software. There are also materials scientists, electrical engineers, and mathematicians who contribute their expertise to building and understanding quantum computers.`,
      `In the following pages, you will meet some of the leading scientists who are shaping the future of quantum computing.`
    ],
    image: '/sketches/scientists.png'
  },
  {
    id: 'wineland-monroe',
    title: 'David Wineland & Christopher Monroe',
    content: [
      `All computers, including quantum ones, need a set of rules to follow to be able to solve problems. In quantum computing, we call this set of rules quantum gates. The most important of these quantum gates is called a Controlled-Not gate, in which one qubit’s state is directly influenced by the state of another entangled qubit. In the 1990s, researchers David Wineland and Christopher Monroe were studying trapped ions and came up with a way to control the interaction between them. Wineland, Monroe, and their team successfully applied a Controlled-Not gate on their trapped ions. This was the first time that anyone had physically shown that it was possible to have these logic gates act on individual qubits, which was the first huge experimental step towards quantum computing.`
    ],
    image: 'wineland-monroe.png'
  },
  {
    id: 'bacon',
    title: 'Dave Bacon',
    content: [
      `Quantum computers will be able to solve problems that a classical computer can’t, such as figure out complex molecular structures. This quantum advantage, or sometimes called “the beyond classical experiment” limit was first shown by Google with superconducting qubits in 2019. While the complex problem that Google solved was not extremely interesting—they showed they could perform complicated computational operations in 200 seconds that would have taken a supercomputer 10,000 years to complete—it was a huge step forward in quantum computing. Dave Bacon was part of the team that achieved quantum supremacy and is now the head of software development for Google’s quantum computer team. He works hard to figure out things like “what kind of programming language do you write a quantum computer in?” and other key software questions. Without Bacon and his team, there would be no way to send computer code to the quantum computer to solve these complex problems.`
    ],
    image: '/sketches/bacon.png'
  },
  {
    id: 'wehner',
    title: 'Stephanie Wehner',
    content: [
      `Once quantum computers are more readily available, how will they communicate with each other? There will need to be a network between quantum computers, much like a quantum internet. Stephanie Wehner leads the Quantum Internet Alliance, a group of researchers around the globe who are starting to build a prototype quantum internet between very basic quantum computers. For Wehner and the Quantum Internet Alliance, an important aspect of the quantum internet will be the ability to access quantum computers anywhere. They envision anyone having access to the powerful computational power of a quantum computer. Additionally, they think your security on the quantum internet is important—what you do on the quantum processor should be hidden from hackers. Lastly, they believe the quantum internet shouldn’t be built just for universities or big projects, but for everyone to be able to program and play with.`
    ],
    image: '/sketches/wehner.png'
  },
  {
    id: 'amoo',
    title: 'Michaela Amoo',
    content: [
      `The field of quantum computing needs all hands on deck to work towards building powerful systems. To provide better access to quantum computing resources for traditionally underrepresented students, IBM founded the Historically Black Colleges and Universities (HBCU) Quantum Center in 2020 to create education, research, and career opportunities at more than two dozen HBCUs across the United States. Michaela Amoo, a professor at Howard University and one of the directors of the Quantum Center, provided both guidance for the program and her students. Amoo specialized in designing electronic hardware, specifically control and readout hardware between quantum and classical devices. Amoo also created educational tools to teach students about quantum engineering and machine learning—computer systems that learn and adapt based on the data it is given—by using classic games like chess, tic-tac-toe, or mancala. Amoo passed away in 2023, but her contributions to the HBCU Quantum Center and the quantum field have had a lasting impact.`
    ],
    image: '/sketches/amoo.png'
  },
  {
    id: 'simmons',
    title: 'Michelle Simmons',
    content: [
      `The first computers filled up entire rooms, and today they are small enough to fit in your pocket. How small could you make a computer—could you make a computer out of individual atoms? One Australian scientist is doing just that. Michelle Simmons works towards building atomic-scale devices: transistors, conducting wires, and other 3D electronics. She must carefully control individual atoms to perfect the devices down to the atomic scale. This level of precision also allows them to create qubits out of silicon quantum dots. In fact, Simmons was the first to perform a quantum gate on two qubits made of silicon. Simmons and her company hope to eventually fit millions of these small qubits into a single device to make a powerful quantum processor.`
    ],
    image: '/sketches/simmons.png'
  },
  {
    id: 'de-leon',
    title: 'Nathalie de Leon',
    content: [
      `How smooth can you make the surface of something? On the atomic scale, what does smooth really mean? While to the eye, a flat surface might look completely organized, the actual atoms themselves might be all mangled at the surface. A smooth and organized surface is important for creating very sensitive nanometer-scale devices in materials, which is called nanofabrication. Nathalie de Leon is leading the way in understanding the tangle of atoms at the surface of a material. By making them more ordered and smooth, she can improve quantum properties like coherence times in the materials she makes for use in quantum computing. She and her research group study ways to improve and master nanofabrication for creating superconducting qubit devices and creating solid-state defects in diamond. In fact, de Leon was awarded the American Physical Society Quantum Computing award in 2023 for her work in nanofabrication.`
    ],
    image: '/sketches/de-leon.png'
  },
  {
    id: 'pollard',
    title: 'Nia Pollard',
    content: [
      `Since quantum computing delves into the realm of particles, it is very closely tied to the field of chemistry. Chemistry studies what molecules and substances are made up of, how they react with each other, and how we can create new ones. So, it is natural that scientist Nia Pollard’s journey intertwines chemistry and quantum computing. Her work enhances classical computing methods with quantum computing simulations in order to help discover new materials. Some molecules can be really complicated, so by using quantum computing, Pollard can explore many possible ways that atoms can arrange themselves to create new materials much quicker than just by using classical computers. Discovering new materials can push technology to new limits and revolutionize industries. Pollard is showing one of the real-life applications of quantum computing and paving the way for other scientists to combine quantum computing with their work.`
    ],
    image: '/sketches/pollard.png'
  },
  {
    id: 'terhal',
    title: 'Barbara Terhal',
    content: [
      `Scientists have been able to make qubits since the 1990s. But how many qubits do you need to make a quantum computer? While you could make very simple programs with just a handful of qubits, more useful programs will need hundreds of qubits. However, qubits are super sensitive to their environment and susceptible to decoherence, which can mess up the qubit when information is stored, during computation, or when the final state is measured—all leading to errors in the quantum computation. Normal computer bits can be duplicated to avoid errors, but qubits can’t be copied—or else their quantum state is lost. Barbara Terhal is a pioneering theoretical physicist who studies special techniques called quantum error correction used to retain qubit information despite errors. These techniques entangle multiple error-prone qubits into one error-protected group. Because one qubit is entangled with multiple others in a web of quantum error correction connections, the answer to “how many qubits are needed to make a computer” will likely be millions!`
    ],
    image: '/sketches/terhal.png'
  },
  {
    id: 'saffman',
    title: 'Mark Saffman',
    content: [
      `We know from the DiVincenzo criteria that quantum computers need to have many qubits working together, upwards of millions—we call this scalability. One major challenge that the field of quantum computing faces today is how exactly to do this. Using neutral atoms for qubits has its advantages because every atom is the exact same and can be put into large arrays, held in place with lasers. Mark Saffman and his team are on a mission to solve the problem of scalability. They have been able to make arrays containing more than 800 neutral atom qubits at the same time, and are working to achieve arrays with thousands of qubits! Saffman collaborates with other quantum physicists around the United States as part of a research institute called Hybrid Quantum Architectures and Networks (HQAN). In a time when universities and companies are racing to find the best type of quantum computer, collaborations like HQAN are critical. These collaborations bring together scientists who test the advantages of all different types of qubits.`
    ],
    image: '/sketches/saffman.png'
  },
  {
    id: 'conclusion',
    title: 'Conclusion - Quantum Computing & You',
    content: [
      `The year 2025 marks 100 years since the birth of the field of quantum science and has been dubbed the “International Year of Quantum Science and Technology.” While large strides have been made to get to this point, the mysteries of quantum science are far from being solved. At this point, while research groups and companies have been able to make small working quantum computers, they are far from mainstream applications. These quantum computers have been made from different qubits, but it's unclear which qubit—superconducting circuits or quantum dots, neutral atoms or trapped ions, photons or topological qubits—will prove best to build scalable quantum computers. Scientists are working their hardest to improve each component needed in the process, from the hardware to the software to the very material the quantum computers are made of. We are still in the early phases of developing the field of quantum computing, but the future is promising and brimming with answers to be answered by powerful quantum computers.`,
      `Many of the people featured in this coloring book are PhD scientists, but the field of quantum is fast-growing and needs people at various levels in their educational and professional journey to join the efforts. Recent analysis from Chicago Quantum Exchange shows that many jobs in the quantum industry don’t require graduate degrees. Quantum computing needs people with different skill sets and backgrounds, ranging from technical skills like soldering to engineering skills like part design in drafting software to computer skills like coding. If you have an interest in applying your knowledge and skills to the smallest scale of the universe, quantum computing may just be your calling.`,
      `Whether you were drawn to this book because it piqued your curiosity in a new topic or it helped you find your future career path, we hope that you walk away having discovered something new.`
    ],
    image: ''
  },
  {
    id: 'glossary',
    title: 'Glossary',
    content: [
      `**Binary Code**: A bit only represents one of two options: 0 or 1. By stringing multiple bits together, more information can be represented based on all the combinations of the values of the bits: two bits can give four different combinations, three bits lead to eight, four bits lead to 16, and so on. Using strings of bits to represent information is called binary code.`,
      `**Bit**: The smallest possible unit of information for computing. A bit is either on or off, and all computers are built from individual bits.`,
      `**Circuit**: A connection of electrical components.`,
      `**Classical Computer**: A machine that runs programs automatically and uses bits to store information. All computers in the 20th and the beginning of the 21st century, like gaming computers, laptops, and smartphones, are all classical computers.`,
      `**Coherence**: When a quantum object has quantum-ness. Often, if a quantum object is disrupted, it loses its coherence. See Decoherence.`,
      `**Collapse**: When a quantum object is put into a superposition of two values, it is both values at once. However, once the value is measured, the value collapses into one or the other.`,
      `**Controlled-Not Gate**: A special program/rule that can be applied to two qubits, where one qubit controls the state of the other qubit. Specifically, when the first qubit is “on”, the second qubit’s value is swapped. See Quantum Gates.`,
      `**Decoherence**: When a quantum system loses its quantum-ness, like superposition or entanglement.`,
      `**Dilution Refrigerator**: Scientific equipment that cools its inside to as cold as 0.002 Kelvin (-459°F or -273°C) using liquid helium. They usually take up most of a room.`,
      `**Encryption**: A way to ensure that a message sent to someone is only seen by that person by translating the message into a secret code. The encoded message might be seen by someone else, but only the other person knows how to decode it.`,
      `**Entanglement**: Two quantum objects can be specially linked so that the behavior of one is tied to the other. The entangled objects are so connected that their behavior cannot be described without one another, even if they are moved miles apart.`,
      `**Error Correction**: A method to protect quantum information stored in a qubit from being disrupted by noise. The information from the qubit is shared among multiple entangled qubits.`,
      `**Interfere, or Interference**: Waves, like those on the surface of water, can interact, or interfere, with each other when they meet at the same place. Interference is the ability for waves in the same medium to add or subtract their amplitude when they meet.`,
      `**Ion**: An atom that has electrons added or removed. An ion has a different number of electrons and protons, meaning it has a non-zero electric charge.`,
      `**Logic**: Computers use bits as the basis of all their programs, and logic is the set of rules that perform calculations on these bits. Computer logic is similar to how arithmetic operations, like addition or multiplication, are a set of rules for math calculations, but it performs operations on bits.`,
      `**Machine Learning**: A subfield of artificial intelligence that develops algorithms that train off of a dataset and then can be applied to new data, so it can perform tasks and analysis without explicit instructions. Machine learning is used in various places, like speech-to-text programs or fraud detection.`,
      `**Molecule**: A group of two or more atoms held together by chemical bonds.`,
      `**Momentum**: A moving object with mass has momentum - the faster or more massive the object, the more momentum. Even subatomic particles have momentum.`,
      `**Nanofabrication**: Methods in nanotechnology to engineer and create structures on the nanometer scale.`,
      `**Neutral Atom**: When atoms have the same number of protons and electrons, they are neutral in charge. These atoms can be optically trapped in laser beams and do not interact with each other, which allows many of them to be contained together. The properties of the electrons of the atom are used as the qubit.`,
      `**Oscillate**: Repetitive motion about a central position, like with a swinging pendulum or water waves.`,
      `**Photon**: A bundle of electromagnetic energy that makes up all light, from ultraviolet to visible light to radio waves.`,
      `**Polarization**: A property of a wave that describes which direction the wave moves, such as up and down or right and left. For example, when plucking a taut string, the direction that it's plucked determines its polarization.`,
      `**Position**: An important characteristic of a subatomic particle is where it is, like where an electron is in its orbit around the nucleus.`,
      `**Probability, or Probable**: How likely an event will occur. Probability can range from 0% (very unlikely to occur) to 100% (very likely to occur).`,
      `**Quantum Advantage**: Quantum computers can solve certain problems much faster than classical computers. Quantum advantage, or “the beyond classical experiment”, is the achievement of a quantum computer solving a problem that a classical computer could not solve within any feasible amount of time. The term “quantum supremacy” was initially used to describe these achievements, but has been replaced because of negative connotations with the word “supremacy”.`,
      `**Quantum Dot**: A semiconductor material that contains a nanometer structure that traps an individual electron. They have a lot of uses in biology, nanotechnology, and quantum computing.`,
      `**Quantum Gate**: Similar to operations in math, like addition, multiplication, or square roots, quantum gates are operations performed with two qubits.`,
      `**Quantum Internet**: A network between physically separated quantum computers, with the idea that other personal devices will be able to connect and use the capabilities of the quantum computers.`,
      `**Quantum Repeater**: To transmit digital information over long distances of cables, the signal will become weaker with longer distances. Repeaters are a way to copy the digital information and boost its signal. For quantum computers, qubit information cannot be copied, so quantum repeaters use entanglement to extend the range of quantum signals.`,
      `**Quantum Simulation**: A special use case of quantum computers that allows individual quantum objects to be manipulated or arranged into a simulation of some natural phenomenon, such as arranging atoms into special configurations to observe how they interact.`,
      `**Quantum State**: In quantum mechanics, “state" refers to the characteristics and values of a quantum object. For example, an electron can be in an excited state, with more energy, or a ground state, with less energy.`,
      `**Qubit**: Analogous to classical computing, qubits are the smallest possible unit of quantum information for quantum computing. A qubit can be on or off, but importantly, it can be both on and off at the same time.`,
      `**Scalability**: The challenge of increasing and controlling the number of qubits, likely millions, in a quantum computer required to solve complex problems.`,
      `**Solid State Defect**: Solid state materials are those in a rigid form -- a solid. A crystal is a solid state material where the individual things making it up (atoms or molecules) are arranged in a very organized structure on the microscopic scale. Defects often occur in these crystal structures, where one of the atoms or molecules is missing, replaced, or misplaced.`,
      `**Spin**: In quantum mechanics, spin is a characteristic of quantum particles, just like how a particle has mass or an electric charge. Spin can be thought of as how fast the particle is spinning—like a top. Surprisingly, the value of the spin of quantum particles can only be specific values!`,
      `**Superconducting Qubit**: A qubit that is identified from certain properties of a superconducting circuit. One example of a property used is the charge, or specifically, the number of electron pairs in a section of the circuit.`,
      `**Superconductor**: A special material, when cold enough, that has absolutely no electrical resistance — it is a “super” conductor. The electrons in a superconductor can flow without any obstacles, meaning an electric current in a loop of superconducting wire can flow forever with no power source. Usually, these materials have to be below 100 Kelvin (-280°F or -173°C) to achieve superconductivity.`,
      `**Superposition**: The measurement of a quantum object can only be one of its multiple states, say state 1 or 0. However, before it is measured, the quantum object can be in a superposition of states. For example, it could be a 50/50 superposition of both 0 and 1, and the probability of the measurement will be completely random.`,
      `**Topology**: The mathematical study of how geometric shapes keep certain properties when they are stretched, twisted, crumpled, or bent, without closing holes, opening holes, tearing, gluing, or passing through itself. The study of topology has numerous applications in physics, computer science, robotics, and biology.`,
      `**Transistor**: A small device made out of semiconductor material that has three electronic ports: a voltage or current is applied to one of the ports, which controls the current between the other two ports. Because of their versatility and microscopic size, they are one of the building blocks of modern computers.`,
      `**Trapped Ion**: By using controllable magnetic fields, ions can be trapped in place or moved across small distances. The ions can be isolated from each other or brought near each other so controlled interactions can occur between them.`
    ],
    image: ''
  },
  {
    id: 'reading',
    title: 'Further Reading',
    content: [
      `**Web Articles:**`,
      `Fortier, Tara. 5 Concepts Can Help You Understand Quantum Mechanics and Technology — Without Math! NIST. www.nist.gov/blogs/taking-measure/5-concepts-can-help-you-understand-quantum-mechanics-and-technology-without (2025)`,
      `Schneider, Josh, and Smalley, Ian. Quantum Computing. IBM. www.ibm.com/think/topics/quantum-computing (2024)`,
      `Swayne, Matt. Harnessing the Power of Neutrality: Comparing Neutral-Atom Quantum Computing With Other Modalities. The Quantum Insider. thequantuminsider.com/2024/02/22/harnessing-the-power-of-neutrality-comparing-neutral-atom-quantum-computing-with-other-modalities/ (2024)`,
      `**Videos and Video Series:**`,
      `Chicago Quantum Exchange. Quick Quantum: For High Schoolers. Youtube. www.youtube.com/watch?v=_QP5hirhXkY&list=PLx1NNaBUh_gBouSIFrkqV9ydOkHjnaHEb (2023)`,
      `Preskill, John. Physics / Computer Science 219A at Caltech: Quantum Computation. Youtube. www.youtube.com/watch?v=w08pSFsAZvE&list=PL0ojjrEqIyPy-1RRD8cTD_lF1hflo89Iu (2021)`,
      `Sanderson, Grant (3Blue1Brown). But What Is Quantum Computing? (Grover’s Algorithm). YouTube. www.youtube.com/watch?v=RQWpF2Gb-gU (2025)`,
      `**Books:**`,
      `Chown, Marcus. Quantum Theory Cannot Hurt You. Faber & Faber. (2008)`,
      `Orzel, Chad. How to Teach Quantum Physics to Your Dog. London Oneworld. (2015)`,
      `Nielsen, Michael A., & Chuang, Isaac L. Quantum Computation and Quantum Information. Cambridge Cambridge University Press. (2010)`,
      `**Games and Interactive Resource:**`,
      `Algorithmiq. QPlayLearn. qplaylearn.com`,
      `IBM. Qiskit - Quantum Learning. quantum.cloud.ibm.com/learning/en`,
      `Matuschak, Andy and Nielsen, Michael. A Quantum Computing for the Very Curious. quantum.country/qcvc, San Francisco (2019)`,
      `Quantum Flytrap. Quantum Game. play.quantumgame.io`
    ],
    image: ''
  },
  {
    id: 'sources',
    title: 'Sources',
    content: [
      `Ball, P. (2024, March 25). The Best Qubits for Quantum Computing Might Just Be Atoms. Quanta Magazine. www.quantamagazine.org/the-best-qubits-for-quantum-computing-might-just-be-atoms-20240325/`,
      `Bradley, A. (2025, May 7). World’s First Silicon-Based Quantum Computer Is Small Enough to Plug into a Regular Power Socket. LiveScience. www.livescience.com/technology/computing/worlds-first-silicon-based-quantum-computer-is-small-enough-to-plug-into-a-regular-power-socket`,
      `Canorea, E. (2025, June 13). Quantum Computing: Potential and Challenges ahead. Plain Concepts. www.plainconcepts.com/quantum-computing-potential-challenges/`,
      `Daley, A. (2012). Quantum Computing. Quantum Optics and Quantum Many-Body Systems. qoqms.phys.strath.ac.uk/research_qc.html`,
      `Dargan, J. (2024, June 1). Quantum Godfathers #4: Yuri Manin, the Accidental Quantum Icon. The Quantum Insider. thequantuminsider.com/2019/12/23/quantum-godfathers-4-yuri-manin-the-accidental-quantum-icon/`,
      `Dargan, J. (2024, November 7). Multiverses, Turing Machines & Quantum Headaches: David Deutsch Explains It All. The Quantum Insider. thequantuminsider.com/2024/11/07/multiverses-turing-machines-quantum-headaches-david-deutsch-explains-it-all/`,
      `Davanco, M. (2023, January 3). Chip Circuit for Light Could Be Applied to Quantum Computations. NIST. www.nist.gov/news-events/news/2023/01/chip-circuit-light-could-be-applied-quantum-computations`,
      `David Deutsch. British Computer Society. (n.d.). www.bcs.org/events/awards-and-competitions/distinguished-fellowship-distfbcs/roll-of-distinguished-fellows/david-deutsch/`,
      `Davies, J. (2022, November 30). David Deutsch – Making More Sense than Common Sense. Mewburn Ellis. www.mewburn.com/news-insights/david-deutsch-making-more-sense-than-common-sense`,
      `Davis, R. (2022, September 28). How The First Superconducting Qubit Changed Quantum Computing Forever. Medium. medium.com/qiskit/how-the-first-superconducting-qubit-changed-quantum-computing-forever-96cf261b8498`,
      `de Leon, N., & Zierler, D. (2021, April 16). Oral History Interviews: Nathalie de Leon. American Institute of Physics. repository.aip.org/de-leon-nathalie-2021-april-16`,
      `Defects in Diamond Could Sense Structures of Single Molecules. Princeton University. (2023, February 20). ece.princeton.edu/news/defects-diamond-could-sense-structures-single-molecules`,
      `Deutsch, D. (n.d.). David Deutsch. TED. www.ted.com/speakers/david_deutsch`,
      `DiVincenzo Criteria. QuEra. (n.d.). www.quera.com/glossary/divincenzo-criteria`,
      `Dunning, F. B., & Killian, T. C. (2021, June 2). Rydberg Atoms: Giants of the Atomic World. Scientia. www.scientia.global/rydberg-atoms-giants-of-the-atomic-world/`,
      `Entanglement. Microsoft. (n.d.). quantum.microsoft.com/en-us/insights/education/concepts/entanglement`,
      `Finke, D. (2024, September 11). CQE Study: You Don’t Need a PhD to Work in Quantum. Quantum Computing Report. quantumcomputingreport.com/cqe-study-you-dont-need-a-phd-to-work-in-quantum/`,
      `Fore, M. (2024, September 10). Fast-Growing Quantum Tech Industry Has Well-Paid Jobs - and Most Don’t Require a Graduate Degree. Chicago Quantum Exchange. chicagoquantum.org/news/fast-growing-quantum-tech-industry-has-well-paid-jobs-and-most-dont-require-graduate-degree`,
      `40 Years of Quantum Computing. Nature Review Physics. (2022, January 10). www.nature.com/articles/s42254-021-00410-6`,
      `Frederick, W. A. I. (2020, October 5). Howard University to Lead IBM’s First Quantum Education and Research Initiative for Historically Black Colleges and Universities. Howard University. president.howard.edu/from-the-president/viewpoints/howard-university-lead-ibms-first-quantum-education-and-research`,
      `Genkina, D. (2024, March 21). Here Are 6 Actual Uses for Near-Term Quantum Computers. IEEE Spectrum. spectrum.ieee.org/what-are-quantum-computers-used-for`,
      `Highly Scalable Quantum Computing with Neutral Atoms. Atom Computing. (2025). atomcomputing.com/wp-content/uploads/2025/01/Atom-Computing-Whitepaper-2025.pdf`,
      `How to Build an Equitable Quantum Computing Future. IBM Quantum Computing Blog. (2022, February 22). www.ibm.com/quantum/blog/spelman-college-joins-hbcu-quantum-center`,
      `Huft, P., Song, Y., Graham, T. M., Jooya, K., Deshpande, S., Fang, C., Kats, M., & Saffman, M. (2022, June 20). A Simple, Passive Design for Large Optical Trap Arrays for Single Atoms. arXiv.org. arxiv.org/abs/2204.07788`,
      `In Memoriam Remembering the Howard Alumni Who Have Departed. Howard Magazine. (2023). magazine.howard.edu/stories/in-memoriam-2`,
      `IQT Sussex. (2017, February 2). Quantum Computer Blueprint with Trapped Ions. YouTube. www.youtube.com/watch?v=LZdJBIpryMw`,
      `Kirchgeßner, K. (2017, July 31). “Physics Is Like Climbing a Mountain.” Helmholtz. www.helmholtz.de/en/newsroom/article/physics-is-like-climbing-a-mountain/`,
      `Krupansky, J. (2023, June 14). Feynman’s Three Papers Related to Quantum Computing. Medium. jackkrupansky.medium.com/feynmans-three-papers-related-to-quantum-computing-dd6f9847e6ad`,
      `Lyon, S. (2023, August 30). A New Route to a Quantum Internet. Princeton University. ece.princeton.edu/news/new-route-quantum-internet`,
      `Monroe, C., & Zierler, D. (2021, March 29). Oral History Interviews: Christopher Monroe. American Institute of Physics. repository.aip.org/monroe-christopher-2021-march-29`,
      `Nayak, C. (2022, March 14). Microsoft Has Demonstrated the Underlying Physics Required to Create a New Kind of Qubit. Microsoft Research. www.microsoft.com/en-us/research/blog/microsoft-has-demonstrated-the-underlying-physics-required-to-create-a-new-kind-of-qubit/`,
      `Newman, M., & Satzinger, K. (2024, December 9). Making Quantum Error Correction Work. Google Research. research.google/blog/making-quantum-error-correction-work/`,
      `The Nobel Moments: Dave Wineland. NIST. (2023, March 22). www.nist.gov/nist-and-nobel/dave-wineland/nobel-moments-dave-wineland`,
      `Our Trapped Ion Technology. IonQ. (n.d.). ionq.com/technology`,
      `Photonic Qubits. QuEra. (n.d.). www.quera.com/glossary/photonic-qubits`,
      `Pichai, S. (2019, October 23). What Our Quantum Computing Milestone Means. Google. blog.google/technology/ai/what-our-quantum-computing-milestone-means/`,
      `Pollard, N., & Choudhary, K. (2025, February 24). BenchQC: A Benchmarking Toolkit for Quantum Computation. arXiv. arxiv.org/abs/2502.09595`,
      `Professor David Deutsch Awarded Breakthrough Prize in Fundamental Physics. University of Oxford. (2022, September 22). www.ox.ac.uk/news/2022-09-22-professor-david-deutsch-awarded-breakthrough-prize-fundamental-physics-0`,
      `Qiskit. (2021, February 22). How Howard University Students Are Hoping to Change the Future of Quantum Computing. Medium. medium.com/qiskit/how-howard-university-students-are-hoping-to-change-the-future-of-quantum-computing-d9b21611badb`,
      `Quantum Chemistry. IBM Research. (n.d.). research.ibm.com/topics/quantum-chemistry`,
      `Quantum Computing in Semiconductor Advancement. Microchip USA. (2024, December 28). www.microchipusa.com/industry-news/quantum-computing-in-semiconductor-advancement`,
      `Quantum Error Correction. Microsoft. quantum.microsoft.com/en-us/insights/education/concepts/quantum-error-correction`,
      `Real-world Applications of Quantum Simulation. QuEra. (2023, October 6). www.quera.com/blog-posts/real-world-applications-of-quantum-simulation`,
      `Schneider, J., & Smalley, I. (2024, February 28). What Is a Qubit? IBM. www.ibm.com/think/topics/qubit`,
      `Silicon Quantum Computing. (n.d.). www.sqc.com.au/`,
      `Silicon Spin Qubits. QuEra. (n.d.). www.quera.com/glossary/silicon-spin-qubits`,
      `Smith-Goodson, P., & Moorhead, P. (2024, March 22). Quantum Sensing Unleashed: How Rydberg Sensors Will Disrupt Telecom. Moor Insights & Strategy. moorinsightsstrategy.com/quantum-sensing-unleashed-how-rydberg-sensors-will-disrupt-telecom/`,
      `Stackpole, B. (2024, January 11). Quantum Computing: What Leaders Need to Know Now. MIT Management Sloan School. mitsloan.mit.edu/ideas-made-to-matter/quantum-computing-what-leaders-need-to-know-now`,
      `Superconducting Qubits. QuEra. (n.d.). www.quera.com/glossary/superconducting-qubits`,
      `Tantillo, A. (2023, September 27). Quantum Repeaters Use Defects in Diamond to Interconnect Quantum Systems. Massachusetts Institute of Technology. news.mit.edu/2023/quantum-repeaters-use-defects-diamond-interconnect-quantum-systems-0927`,
      `The Transformative Power of Neutral-Atom Quantum Computing for HPC Centers. QuEra. (2024, October 22). www.quera.com/blog-posts/neutral-atom-quantum-computing-for-hpc-centers`,
      `WebsEdge Science. (2024, March 21). Quantum for All: Stephanie Wehner on Democratizing Quantum Networks. YouTube. www.youtube.com/watch?si=th9LuSmCzhKC05iF&v=6CnQc8o4TzE&feature=youtu.be`,
      `Wehner, S., Kaul, E., & Ricchiuti, A. (2025, March 12). QIA Researchers Create First Operating System for Quantum Networks. TU Delft. www.tudelft.nl/en/2024/tu-delft/qia-researchers-create-first-operating-system-for-quantum-networks`,
      `What Is Entanglement and Why Is It Important? Caltech Science Exchange. (n.d.). scienceexchange.caltech.edu/topics/quantum-science-explained/entanglement`,
      `What is Machine Learning? IBM. (2021, September 22). www.ibm.com/think/topics/machine-learning`,
      `What is quantum coherence? Argonne National Laboratory. (2025, February 19). www.anl.gov/article/what-is-quantum-coherence`,
      `What Is Superposition and Why Is It Important? Caltech Science Exchange. (n.d.). scienceexchange.caltech.edu/topics/quantum-science-explained/quantum-superposition`,
      `Walliman, D. (2024, May 13). Microsoft’s Topological Quantum Computer Explained. YouTube. www.youtube.com/watch?v=ihZXI33t8So`,
      `Wineland, D., & Zierler, D. (2024, December 18). Oral History Interviews: David Wineland. American Institute of Physics. repository.aip.org/wineland-david-2020-october-27`,
      `Zierler, D. (2022, January 31). David Bacon (BS ’97), Quantum Physicist. Caltech. heritageproject.caltech.edu/interviews-updates/david-bacon`
    ],
    image: ''
  },
  {
    id: 'Citations',
    title: 'Citations',
    content: [
      `This book was made possible by the support and funding from the University of WisconsinMadison Department of Physics and the National Science Foundation (NSF) Quantum Leap Challenge Institute (QLCI) Hybrid Quantum Architectures and Networks (HQAN).`,
    ],
    image: ''
  }
];
