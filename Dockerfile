FROM ubuntu
ADD bobthebuilder /bin/
RUN chmod +x /bin/bobthebuilder
CMD ["/bin/bobthebuilder"]
