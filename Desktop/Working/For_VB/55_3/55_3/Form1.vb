Public Class Form1
    Dim i As Integer = 0
    Dim a(9) As Integer
    Dim j As Integer = 0
    Private Sub btnRandom_Click(sender As Object, e As EventArgs) Handles btnRandom.Click
        Dim r As Integer

        For i = 0 To 9 Step 1
            Randomize()
            r = (99 * Rnd()) + 1
            ListBox1.Items.Add(r)
        Next

    End Sub

    Private Sub btnGroup_Click(sender As Object, e As EventArgs) Handles btnGroup.Click

        For i = 0 To 9 Step 1
            a(i) = Val(ListBox1.Items(i))
        Next
        ListBox2.Items.Add(a(0))

        For j = 0 To 8 Step 1

            If a(j) > a(j + 1) Then

                ListBox2.Items.Add("------")
                ListBox2.Items.Add(a(j + 1))

            Else
                ListBox2.Items.Add(a(j + 1))
            End If

        Next



    End Sub
End Class
