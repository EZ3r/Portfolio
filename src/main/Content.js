import React from 'react'
import CodeBlock from './CodeBlock.js'
import './Content.css'

function Content() {
  return (
    <div className="main">
        <div id="git" className="content">
            <h2>Git and Version Control</h2>
            <p>Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. If you are a graphic or web designer and want to keep every version of an image or layout (which you would most certainly want to), a Version Control System (VCS) is a very wise thing to use. It allows you to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more.</p>
            <p>Git is a distributed version control system that enables software development teams to have multiple local copies of the project's codebase independent of each other. These copies, or branches, can be created, merged, and deleted quickly. <b>Git makes effective collaboration come true!</b></p>
        </div>
        
        <div id="ssh" className="content">
            <h2>SSH Key</h2>
            <p>SSH (Secure Shell) is used for managing networks, operating systems, and configurations. It is also inside many file transfer tools and configuration management tools. Every major corporation uses it, in every data center.</p>
            <p>SSH keys enable the automation that makes modern cloud services and other computer-dependent services possible and cost-effective. They offer convenience and improved security when properly managed. Functionally SSH keys resemble passwords. They grant access and control who can access what. Authorized keys are public keys that grant access. They are analogous to locks that the corresponding private key can open.</p>
            <img className="ssh"  src="https://imgs.xkcd.com/comics/public_key.png" alt=""></img>
            <p><b>DON'T DO SILLY THING LIKE THIS!</b> Your private key essentially acts as a part of a digital signature mechanism. It uniquely identifies you when you access a server or service, like GitHub for code repositories. If someone else gains access to your private key, they can impersonate you.</p>
            <a href="https://phoenixnap.com/kb/ssh-with-key" target="_blank" rel="noreferrer">Generating your SSH key</a>
        </div>
        
        <div id="github" className="content">
            <h2>GitHub</h2>
            <p>GitHub is a web-based platform that provides hosting for software development and version control using Git. GitHub allows multiple developers to work on a single project at the same time, reduces the risk of duplicative or conflicting work, and can help decrease production time. With GitHub, developers can build code, track changes, and innovate solutions to problems that might arise during the site development process simultaneously. Non-developers can also use it to create, edit, and update website content. It is also a great platform for developers to share their code to public and learn from each other.</p>
            <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh" target="_blank" rel="noreferrer">Connecting to GitHub with SSH</a>
            <a href="https://blawson.bates-catapult.net/github_tutorial/" target="_blank" rel="noreferrer">Creating your first GitHub project</a>
        </div>
        
        <div id="commands" className="content">
            <h2>Terminal Commands</h2>
            <p>Use the CD command to locate a directory where you want your GitHub project to sit:</p>
            <CodeBlock code={'cd path/to/directory'} />
            <p>Clone the repository using your SSH link copied from GitHub:</p>
            <CodeBlock code={'git clone ssh://your_ssh_link_from_github'} />
            <p>Check the current working branch (initially, you should only see 'main' branch):</p>
            <CodeBlock code={'git branch'} />
            <p>Create and switch to your new local branch:</p>
            <CodeBlock code={'git checkout -b your_local_branch_name'} />
            <p>Now you can begin your work in the local branch. When you're ready, commit changes:</p>
            <CodeBlock code={'git commit -a -m "Meaningful commit message"'} />
            <p>If you have new files to add, use:</p>
            <CodeBlock code={'git add path/to/new_file'} />
            <p>To add all new files and changes at once:</p>
            <CodeBlock code={'git add .'} />
            <p><b>Before merging your changes to the main branch, ensure your code is fully tested and debugged.</b> Then, switch back to the main branch:</p>
            <CodeBlock code={'git checkout main'} />
            <p>Merge your local branch into the main branch:</p>
            <CodeBlock code={'git merge your_local_branch_name'} />
            <p>Always pull the latest changes from the remote repository before pushing your changes to ensure there are no conflicts:</p>
            <CodeBlock code={'git pull origin main'} />
            <p>Now, push your changes to GitHub:</p>
            <CodeBlock code={'git push origin main'} />
            <p>If you have followed the steps correctly, you should see the changes on GitHub. <b>Cheers!</b></p>
            <p>When encounter merge conflicts, follow this guidline:</p>
            <a href="https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts" target="_blank" rel="noreferrer">Solving merge conflicts</a>
        </div>
    </div>
  )
}

export default Content