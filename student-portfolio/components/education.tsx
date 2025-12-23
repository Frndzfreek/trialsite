import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Education & Achievements</h2>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-balance">Bachelor of Science in Computer Science</CardTitle>
                  <CardDescription>Tech University • 2022 - 2026 (Expected)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground leading-relaxed">Current GPA: 3.8/4.0</p>
              <p className="text-muted-foreground leading-relaxed">
                Relevant Coursework: Data Structures & Algorithms, Database Systems, Machine Learning, Web Development,
                Software Engineering
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-balance">Awards & Recognition</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span className="leading-relaxed">1st Place - University Hackathon 2024 (AI Category)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span className="leading-relaxed">Dean's List - All Semesters (2022-2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span className="leading-relaxed">Computer Science Department Scholarship Recipient</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span className="leading-relaxed">Google Code Jam Qualifier - Round 2</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
