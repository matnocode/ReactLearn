import Article from "../article/Article";
const Main = () =>
{
    return(
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <Article
                        icon = "bi bi-collection"
                        title = "Fresh new layout"
                        description = "With Bootstrap 5, we've created a fresh new layout for this
                        template!"
                    />
                    <Article
                        icon ="bi bi-cloud-download"
                    title = "Free to download"
                    description = "As always, Start Bootstrap has a powerful collectin of free
                    templates."
                    />
                    <Article
                        icon ="bi bi-card-heading"
                    title = "Jumbotron hero header"
                    description = "The heroic part of this template is the jumbotron hero header"
                    />
                    <Article
                        icon ="bi bi-bootstrap"
                    title = "Feature boxes"
                    description = "We've created some custom feature boxes using Bootstrap icons!"
                    />
                    <Article
                        icon ="bi bi-code"
                    title = "Simple clean code"
                    description = "We keep our dependencies up to date and squash bugs as they
                    come!"
                    />
                    <Article
                        icon ="bi bi-patch-check"
                    title = "A name you trust"
                    description = "Start Bootstrap has been the leader in free Bootstrap templates
                since 2013!"
                    />
                </div>
            </div>
        </section>
    )
}

export default Main;