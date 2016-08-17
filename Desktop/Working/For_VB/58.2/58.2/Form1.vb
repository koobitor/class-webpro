Public Class Form1

    Dim a As Integer = 10
    Dim x(4), y(4) As PictureBox

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        Dim r, r2 As Integer

        Randomize()
        r = (3 * Rnd()) + 1
        r2 = (3 * Rnd()) + 1

        PictureBox1.Image = x(r).Image
        PictureBox2.Image = y(r2).Image

        If PictureBox1.Image Is PictureBox3.Image And PictureBox2.Image Is PictureBox3.Image Then

            Timer1.Stop()
            MessageBox.Show("You Win", "Win", MessageBoxButtons.OK)

        End If

    End Sub

    Private Sub Timer1_Tick(sender As Object, e As EventArgs) Handles Timer1.Tick
        a = a - 1
        lbltimer.Text = a
        If a = 0 Then
            Timer1.Stop()
            MessageBox.Show("Time up", "lose", MessageBoxButtons.OK)
        End If
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        Close()
    End Sub

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Timer1.Enabled = True
        Timer1.Interval = 1000
        Timer1.Start()
        lbltimer.Text = a

        x(1) = PictureBox3 : x(2) = PictureBox4
        x(3) = PictureBox5 : x(4) = PictureBox6
        y(1) = PictureBox3 : y(2) = PictureBox4
        y(3) = PictureBox5 : y(4) = PictureBox6


    End Sub
End Class
