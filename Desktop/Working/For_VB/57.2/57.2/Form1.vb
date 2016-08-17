Public Class Form1
    Dim i, max, a(10) As Integer

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        ListBox1.Items.Add("Times")
        ListBox2.Items.Add("Dice1")
        ListBox3.Items.Add("Dice2")
        ListBox4.Items.Add("Total")
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click

        ListBox4.Items.Clear()
        ListBox3.Items.Clear()
        ListBox2.Items.Clear()
        ListBox1.Items.Clear()
        Button1.Enabled = True
        Button2.Enabled = True
        ListBox1.Items.Add("Times")
        ListBox2.Items.Add("Dice1")
        ListBox3.Items.Add("Dice2")
        ListBox4.Items.Add("Total")
        TextBox1.Text = (" ")

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        Dim r, r2, sum, final As Integer

        For i = 1 To 10 Step 1

            sum = 0

            Randomize()
            r = (5 * Rnd()) + 1
            r2 = (5 * Rnd()) + 1
            sum = r + r2
            final = sum
            a(i) = final

            ListBox1.Items.Add(i)
            ListBox2.Items.Add(r)
            ListBox3.Items.Add(r2)
            ListBox4.Items.Add(sum)

        Next
        Button1.Enabled = False
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click

        Dim m As Integer = 1

        max = a(1)

        For i = 1 To 9 Step 1


            If a(i + 1) > max Then

                m = 0
                m = i + 1
                max = a(i + 1)

            End If

        Next

        ListBox4.SelectedIndex = m
        Button2.Enabled = False
        TextBox1.Text = "Max is " & max
    End Sub
End Class
